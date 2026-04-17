const hiringEmail = "joinourteam@welcomehospitality.com";

const roles = ["Prep Cook", "Line Cook", "Dishwasher"];

export default function Opportunity() {
  const mailto = `mailto:${hiringEmail}?subject=${encodeURIComponent(
    "Opportunity — Welcome Diner"
  )}`;
  return (
    <section className="mx-auto max-w-xl px-4 py-12 text-center">
      <h1 className="eyebrow mb-10">Opportunity</h1>

      <p className="italic font-semibold text-lg leading-snug uppercase">
        Currently looking for
        <br />
        back of house peeps…
      </p>

      <ul className="mt-4 space-y-1 text-sm uppercase tracking-wide">
        {roles.map((r) => (
          <li key={r}>{r}</li>
        ))}
        <li className="text-brand-muted">+</li>
      </ul>

      <p className="mt-4 italic font-semibold text-base leading-snug uppercase">
        We are always searching for
        <br />
        strong team members with
        <br />
        unique and valuable skills
      </p>

      <p className="mt-4 text-base">
        who are you? tell us what&rsquo;s good,
        <br />
        become a WELCOME HOMIE…
      </p>

      <a
        href={mailto}
        className="mt-10 inline-block bg-brand-muted/10 px-6 py-3 text-xs uppercase tracking-[0.35em] hover:bg-brand-accent hover:text-white transition-colors"
      >
        Email Us
      </a>
    </section>
  );
}
