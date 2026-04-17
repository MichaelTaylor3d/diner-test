"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="p-2 text-ink hover:text-terracotta transition-colors"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-14 z-50 bg-bg-ivory overflow-y-auto">
          <nav className="flex flex-col gap-5 p-8 text-base uppercase tracking-[0.35em]">
            {primaryNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="hover:text-terracotta"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-terracotta"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
}
