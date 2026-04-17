import Image from "next/image";
import { Eyebrow } from "@/components/atoms/Eyebrow";

type Props = {
  image: string;
  alt: string;
  eyebrow: string;
  name: string;
  body: string;
};

export function PurveyorCard({ image, alt, eyebrow, name, body }: Props) {
  return (
    <article className="group">
      <div className="relative w-full overflow-hidden aspect-[4/5]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
        />
      </div>
      <Eyebrow className="mt-4 text-terracotta">{eyebrow}</Eyebrow>
      <h3 className="display text-2xl md:text-3xl mt-1">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-desert-shadow">{body}</p>
    </article>
  );
}
