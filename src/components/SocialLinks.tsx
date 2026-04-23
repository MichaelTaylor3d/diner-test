import { externalLinks } from "@/data/externalLinks";

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.4c0-.87.3-1.4 1.5-1.4H17V4.3C16.4 4.2 15.3 4 14 4c-2.6 0-4.5 1.6-4.5 4.2V10.5H7V13.5h2.5V21h4z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={externalLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Welcome Diner on Facebook (opens in a new tab)"
        className="hover:text-brand-accent"
      >
        <FacebookIcon />
      </a>
      <a
        href={externalLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Welcome Diner on Instagram (opens in a new tab)"
        className="hover:text-brand-accent"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
