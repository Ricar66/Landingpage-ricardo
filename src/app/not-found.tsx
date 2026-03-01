import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-text-primary">
      <h1 className="text-[var(--text-display)] font-display font-black mb-4">
        404
      </h1>
      <p className="text-text-secondary mb-8 font-display">
        Página não encontrada.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-accent text-white text-sm font-semibold font-display hover:bg-accent-hover transition-colors"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
