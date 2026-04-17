import { externalLinks } from "@/data/externalLinks";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${externalLinks.inquireEmail}?subject=${encodeURIComponent(
    externalLinks.inquireSubject
  )}`;
  return (
    <footer className="border-t border-brand-muted/20 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-6 items-center text-center">
        <h2 className="font-display text-2xl tracking-widest uppercase">
          Follow Us
        </h2>
        <SocialLinks />
        <a
          href={mailto}
          className="text-xs uppercase tracking-widest hover:text-brand-accent"
        >
          Inquire
        </a>
        <p className="text-xs text-brand-muted">© {year} Welcome Diner</p>
      </div>
    </footer>
  );
}
