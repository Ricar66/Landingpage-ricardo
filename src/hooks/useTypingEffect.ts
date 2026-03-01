"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseTypingEffectOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingEffect({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseTypingEffectOptions) {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const reduced = useReducedMotion();
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const tick = useCallback(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex.current];

    if (isDeleting.current) {
      charIndex.current--;
      setText(currentWord.substring(0, charIndex.current));
      setIsTyping(false);

      if (charIndex.current === 0) {
        isDeleting.current = false;
        wordIndex.current = (wordIndex.current + 1) % words.length;
        timeoutRef.current = setTimeout(tick, 300);
        return;
      }
    } else {
      charIndex.current++;
      setText(currentWord.substring(0, charIndex.current));
      setIsTyping(true);

      if (charIndex.current === currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          isDeleting.current = true;
          tick();
        }, pauseDuration);
        return;
      }
    }

    const speed = isDeleting.current ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(tick, speed);
  }, [words, typingSpeed, deletingSpeed, pauseDuration, reduced]);

  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }

    timeoutRef.current = setTimeout(tick, 500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tick, reduced, words]);

  return { text, isTyping };
}
