import Image from "next/image";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { BrassButton } from "@/components/atoms/BrassButton";
import { Divider } from "@/components/atoms/Divider";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { images } from "@/data/images";

const hours = [
  { label: "Sun", value: "9a – 9p" },
  { label: "Mon–Thu", value: "11a – 10p" },
  { label: "Fri", value: "11a – Midnight" },
  { label: "Sat", value: "9a – Midnight" },
];

export default function Locations() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-2 items-center">
      <RevealOnView className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={images.editorialRoom}
          alt="Welcome Diner interior"
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </RevealOnView>

      <RevealOnView>
        <Eyebrow className="text-terracotta">Visit</Eyebrow>
        <DisplayText as="h1" size="lg" className="mt-2">
          Garfield Historic District, Downtown Phoenix.
        </DisplayText>

        <address className="not-italic mt-8 text-base leading-7">
          929 E Pierce St
          <br />
          Phoenix, AZ 85006
        </address>

        <Divider className="my-8" label="Hours" />
        <dl className="grid grid-cols-[max-content_1fr] gap-x-8 gap-y-2 text-sm">
          {hours.map((h) => (
            <div key={h.label} className="contents">
              <dt className="uppercase tracking-[0.25em] text-xs text-desert-shadow">
                {h.label}
              </dt>
              <dd>{h.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <BrassButton
            href="https://www.google.com/maps/dir//929+E+Pierce+St,+Phoenix,+AZ+85006"
            external
            size="lg"
          >
            Get Directions
          </BrassButton>
        </div>
      </RevealOnView>
    </section>
  );
}
