import { ExternalButton } from "@/components/ExternalButton";

const hiringEmail = "joinourteam@welcomehospitality.com";

export default function Opportunity() {
  const mailto = `mailto:${hiringEmail}?subject=${encodeURIComponent(
    "Opportunity — Welcome Diner"
  )}`;
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-center space-y-6">
      <h1 className="font-display text-4xl md:text-5xl uppercase tracking-widest">
        Opportunity
      </h1>
      <p className="text-base leading-relaxed">
        We&rsquo;re always looking for strong teammates with unique skills and
        real hospitality instincts. Tell us who you are and what&rsquo;s good —
        become a Welcome Homie.
      </p>
      <div className="pt-2">
        <ExternalButton href={mailto} external>
          Email Us
        </ExternalButton>
      </div>
    </section>
  );
}
