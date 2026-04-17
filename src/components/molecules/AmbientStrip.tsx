import { RevealOnView } from "@/components/motion/RevealOnView";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

type Shot = { src: string; alt: string };

type Props = {
  shots: Shot[];
  className?: string;
};

export function AmbientStrip({ shots, className = "" }: Props) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 ${className}`}>
      <div className="grid gap-4 md:grid-cols-3">
        {shots.map((s, i) => (
          <RevealOnView key={s.src} amount={0.3}>
            <div className="relative aspect-square overflow-hidden">
              <ParallaxImage
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover"
                strength={15 + i * 5}
              />
            </div>
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
