export type PressData = {
  publication: string;
  quote?: string;
  url?: string;
};

export function PressCard({ press }: { press: PressData }) {
  const content = (
    <article className="p-6 border border-brand-muted/30 rounded h-full">
      <h3 className="font-display text-xl uppercase tracking-widest">
        {press.publication}
      </h3>
      {press.quote && (
        <p className="mt-2 text-sm italic">&ldquo;{press.quote}&rdquo;</p>
      )}
    </article>
  );

  return press.url ? (
    <a
      href={press.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:border-brand-accent"
    >
      {content}
    </a>
  ) : (
    content
  );
}
