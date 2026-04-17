import { Divider } from "@/components/atoms/Divider";

const hours = [
  { label: "Sunday", value: "9a – 9p" },
  { label: "Mon–Thu", value: "11a – 10p" },
  { label: "Friday", value: "11a – Midnight" },
  { label: "Saturday", value: "9a – Midnight" },
];

export function HoursStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Divider label="Hours" />
      <ul className="mt-10 grid gap-6 md:grid-cols-4 text-center">
        {hours.map((h) => (
          <li key={h.label}>
            <p className="eyebrow text-desert-shadow">{h.label}</p>
            <p className="display text-2xl md:text-3xl mt-1">{h.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
