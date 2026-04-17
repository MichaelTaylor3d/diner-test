import Link from "next/link";
import { primaryNav } from "@/data/nav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-muted/20 bg-brand-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-widest uppercase">
            Welcome Diner
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-xs uppercase tracking-widest">
          {primaryNav.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-brand-accent"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
