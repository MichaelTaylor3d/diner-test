import { Facebook, Instagram } from "lucide-react";
import { externalLinks } from "@/data/externalLinks";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={externalLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-brand-accent"
      >
        <Facebook size={22} />
      </a>
      <a
        href={externalLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-brand-accent"
      >
        <Instagram size={22} />
      </a>
    </div>
  );
}
