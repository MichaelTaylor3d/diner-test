import Link from "next/link";
import { externalLinks } from "@/data/externalLinks";
import { SocialLinks } from "./SocialLinks";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { CreditsStrip } from "@/components/molecules/CreditsStrip";

const hours = [
  { label: "Sun", value: "9a – 9p" },
  { label: "Mon–Thu", value: "11a – 10p" },
  { label: "Fri", value: "11a – Midnight" },
  { label: "Sat", value: "9a – Midnight" },
];

export function Footer() {
  const mailto = `mailto:${externalLinks.inquireEmail}?subject=${encodeURIComponent(
    externalLinks.inquireSubject
  )}`;

  return (
    <footer className="mt-24 bg-bg-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <Eyebrow className="text-brass">Welcome Diner</Eyebrow>
          <p className="display text-3xl mt-3">
            929 E Pierce St
            <br />
            Phoenix, AZ 85006
          </p>
          <Link
            href="/locations"
            className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-brass hover:text-cream transition-colors"
          >
            Get directions
          </Link>
        </div>

        <div>
          <Eyebrow className="text-brass">Hours</Eyebrow>
          <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1 text-sm">
            {hours.map((h) => (
              <div key={h.label} className="contents">
                <dt className="uppercase tracking-[0.25em] text-xs text-desert-shadow">
                  {h.label}
                </dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <Eyebrow className="text-brass">Follow</Eyebrow>
          <div className="mt-3">
            <SocialLinks className="text-cream" />
          </div>
          <a
            href={mailto}
            className="mt-6 inline-block text-xs uppercase tracking-[0.35em] text-brass hover:text-cream transition-colors"
          >
            Inquire →
          </a>
        </div>
      </div>

      <Divider className="mx-auto max-w-6xl px-4 my-10" label="est. 2004" />

      <CreditsStrip />
      <p className="py-6 text-center text-[10px] uppercase tracking-[0.4em] text-desert-shadow">
        © {new Date().getFullYear()} Welcome Diner
      </p>
    </footer>
  );
}
