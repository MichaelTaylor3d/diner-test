import Link from "next/link";
import { externalLinks } from "@/data/externalLinks";
import { MobileNav } from "./MobileNav";

type NavEntry = { label: string; href: string; external?: boolean };

const primary: NavEntry[] = [
  { label: "Home", href: "/" },
  { label: "Menus", href: "/menu" },
  { label: "Order", href: externalLinks.order, external: true },
  { label: "Locations", href: "/locations" },
  { label: "Catering", href: externalLinks.catering, external: true },
  { label: "Purveyors", href: "/purveyors" },
];

const more: NavEntry[] = [
  { label: "Our Story", href: "/our-story" },
  { label: "Mentions", href: "/mentions" },
  { label: "Opportunity", href: "/opportunity" },
  { label: "Sister Spots", href: "/sister-spots" },
];

function NavLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const cls = "hover:text-brand-accent transition-colors";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <nav className="hidden lg:flex items-center justify-center gap-8 text-[11px] uppercase tracking-[0.3em]">
          {primary.map((item) => (
            <NavLink key={item.label} href={item.href} external={item.external}>
              {item.label}
            </NavLink>
          ))}
          <div className="group relative">
            <button className="flex items-center gap-1 uppercase tracking-[0.3em] text-[11px] hover:text-brand-accent transition-colors">
              More <span aria-hidden>▾</span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block">
              <div className="bg-white border border-brand-muted/20 shadow-md min-w-[180px] py-2">
                {more.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-[11px] uppercase tracking-[0.25em] hover:text-brand-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="lg:hidden flex justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
