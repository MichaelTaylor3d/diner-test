"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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

function NavLink({ item, active }: { item: NavEntry; active: boolean }) {
  const cls = `relative inline-flex items-center uppercase tracking-[0.35em] text-[11px] transition-colors hover:text-terracotta ${
    active ? "text-terracotta" : "text-current"
  }`;
  const underline = (
    <span
      className={`absolute -bottom-1 left-0 right-0 h-px origin-left bg-brass transform transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  );
  return (
    <span className="group relative">
      {item.external ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
          {item.label}
        </a>
      ) : (
        <Link href={item.href} className={cls}>
          {item.label}
        </Link>
      )}
      {underline}
    </span>
  );
}

export function Header() {
  const [scrollState, setScrollState] = useState<"atTop" | "mid" | "condensed">("atTop");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 8) setScrollState("atTop");
      else if (y > 80) setScrollState("condensed");
      else setScrollState("mid");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const headerCls =
    scrollState === "atTop"
      ? "bg-transparent text-cream py-6"
      : scrollState === "condensed"
      ? "backdrop-blur bg-bg-ivory/90 text-ink py-3"
      : "bg-bg-ivory text-ink py-6";

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${headerCls}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4">
        <nav className="hidden lg:flex items-center justify-center gap-10">
          {primary.map((item) => (
            <NavLink key={item.label} item={item} active={isActive(item.href)} />
          ))}
          <span className="group relative">
            <button className="flex items-center gap-1 uppercase tracking-[0.35em] text-[11px] text-current hover:text-terracotta transition-colors">
              More <span aria-hidden>▾</span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
              <div className="bg-cream text-ink border border-brass/40 shadow-2xl min-w-[220px] py-3">
                {more.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-5 py-2 text-[11px] uppercase tracking-[0.3em] transition-colors hover:text-terracotta ${
                      isActive(item.href) ? "text-terracotta" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </span>
        </nav>

        <div className="lg:hidden ml-auto">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
