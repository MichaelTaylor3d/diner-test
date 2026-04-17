const hiringEmail = "joinourteam@welcomehospitality.com";

export default function Opportunity() {
  const mailto = `mailto:${hiringEmail}?subject=${encodeURIComponent(
    "Opportunity — Welcome Diner"
  )}`;
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-center space-y-6">
      <h1 className="eyebrow mb-4">Opportunity</h1>
      <p className="text-base leading-7">
        We are always searching for strong team members with unique and
        valuable skills.
      </p>
      <p className="text-base leading-7">
        who are you? tell us what&rsquo;s good,
      </p>
      <p className="font-display text-xl tracking-wide">
        become a WELCOME HOMIE
      </p>
      <a
        href={mailto}
        className="inline-block border border-brand-muted/30 px-6 py-3 text-xs uppercase tracking-[0.35em] hover:border-brand-accent hover:text-brand-accent transition-colors"
      >
        Email Us
      </a>
    </section>
  );
}
