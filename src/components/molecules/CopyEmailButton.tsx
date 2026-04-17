"use client";

import { useState } from "react";

type Props = { email: string; subject: string };

export function CopyEmailButton({ email, subject }: Props) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // no-op
    }
  }

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <a
      href={mailto}
      onClick={onClick}
      className="group relative inline-flex items-center justify-center overflow-hidden border border-brass px-8 py-4 text-xs uppercase tracking-[0.4em] text-brass transition-colors hover:text-bg-ivory"
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-brass transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
      />
      <span className="relative z-10">
        {copied ? "Copied " + email : "Email Us"}
      </span>
    </a>
  );
}
