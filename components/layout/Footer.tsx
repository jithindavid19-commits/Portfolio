import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim md:flex-row md:items-center">
        <p>&copy; {year} {profile.name}</p>
        <p>Designed &amp; built for the next role.</p>
      </div>
    </footer>
  );
}
