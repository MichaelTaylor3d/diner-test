import { externalLinks } from "@/data/externalLinks";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const mailto = `mailto:${externalLinks.inquireEmail}?subject=${encodeURIComponent(
    externalLinks.inquireSubject
  )}`;
  return (
    <footer className="border-t border-brand-muted/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-4 items-center text-center">
        <h2 className="text-sm uppercase tracking-[0.45em]">Follow Us</h2>
        <SocialLinks />
        <a
          href={mailto}
          className="text-[11px] uppercase tracking-[0.4em] text-brand-muted hover:text-brand-accent"
        >
          Inquire
        </a>
      </div>
    </footer>
  );
}
