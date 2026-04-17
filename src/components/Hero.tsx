import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function Hero({ image, alt, title, subtitle, children }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="font-display text-4xl md:text-6xl tracking-widest uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base md:text-lg">{subtitle}</p>
        )}
        {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
