import type { Metadata } from "next";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { CopyEmailButton } from "@/components/molecules/CopyEmailButton";
import { StaffQuote } from "@/components/molecules/StaffQuote";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Opportunity",
  description:
    "Join the Welcome Diner team. We're hiring prep cooks, line cooks, and dishwashers — strong team members with unique and valuable skills.",
  alternates: { canonical: "/opportunity" },
  openGraph: {
    title: "Opportunity — Welcome Diner",
    description: "Join the team — now hiring prep cooks, line cooks, dishwashers.",
    url: "/opportunity",
    images: [{ url: "/images/lux/staff-portrait.jpg", width: 1400, height: 1750, alt: "Welcome Diner kitchen team" }],
  },
};

const hiringEmail = "joinourteam@welcomehospitality.com";

const roles = ["Prep Cook", "Line Cook", "Dishwasher"];

export default function Opportunity() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Opportunity", path: "/opportunity" },
        ]}
      />
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <RevealOnView>
          <Eyebrow className="text-terracotta">Opportunity</Eyebrow>
          <DisplayText as="h1" size="xl" className="mt-2">
            Become a Welcome Homie.
          </DisplayText>
        </RevealOnView>

        <Divider className="mt-12" label="Now Hiring" />

        <RevealOnView className="mt-8 flex flex-wrap justify-center gap-3">
          {roles.map((r) => (
            <span
              key={r}
              className="border border-brass/60 px-5 py-2 text-xs uppercase tracking-[0.35em] text-brass"
            >
              {r}
            </span>
          ))}
        </RevealOnView>

        <RevealOnView>
          <p className="mt-10 italic text-base leading-7 text-desert-shadow">
            We are always searching for strong team members with unique and
            valuable skills. Who are you? Tell us what&rsquo;s good.
          </p>
        </RevealOnView>

        <div className="mt-10">
          <CopyEmailButton email={hiringEmail} subject="Opportunity — Welcome Diner" />
        </div>
      </section>

      <StaffQuote
        image={images.staffPortrait}
        alt="Line cook at the pass"
        quote="You show up hungry, you leave full. The crew here feels like a second family."
        attribution="— Marley, line cook, 3 years"
      />
    </>
  );
}
