import { unsplashAttributions } from "@/data/unsplash";

type Attribution = {
  url: string;
  name: string;
};

export function CreditsStrip() {
  if (!unsplashAttributions.length) return null;
  return (
    <aside className="border-t border-brass/20 px-4 py-4 text-center text-[10px] uppercase tracking-[0.3em] text-desert-shadow">
      Photography:{" "}
      {unsplashAttributions.map((c: Attribution, i: number) => (
        <span key={c.url}>
          {i > 0 && " · "}
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta"
          >
            {c.name}
          </a>
        </span>
      ))}{" "}
      on Unsplash
    </aside>
  );
}
