"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

const ScrollProgress = dynamic(
  () => import("@/components/atoms/ScrollProgress"),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/atoms/CustomCursor"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CTASection />
        <StackSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
