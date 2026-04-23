"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/nav";
import { ExternalIndicator } from "@/components/atoms/ExternalIndicator";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Move focus into the overlay after the portal mounts
      const t = setTimeout(() => firstLinkRef.current?.focus(), 50);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const overlay = open ? (
    <div
      id="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-0 top-[72px] z-[110] bg-bg-ivory"
    >
      <nav className="h-full flex flex-col items-center justify-center gap-6 text-sm uppercase tracking-[0.4em]">
        {primaryNav.map((item, i) =>
          item.external ? (
            <a
              key={item.label}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-ink hover:text-terracotta transition-colors"
            >
              {item.label}
              <ExternalIndicator />
            </a>
          ) : (
            <Link
              key={item.label}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-ink hover:text-terracotta transition-colors"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-overlay"
        onClick={() => setOpen((o) => !o)}
        className="p-2 text-ink hover:text-terracotta transition-colors"
      >
        {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>
      {overlay && typeof document !== "undefined" && createPortal(overlay, document.body)}
    </>
  );
}
