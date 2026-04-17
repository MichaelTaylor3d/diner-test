import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

export function MenuImagePage({ title, image }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl uppercase tracking-widest text-center mb-8">
        {title}
      </h1>
      <div className="relative w-full aspect-[3/4] sm:aspect-[4/3]">
        <Image
          src={image}
          alt={`${title} menu`}
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}
