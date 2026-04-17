import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  children: React.ReactNode;
};

export function Hero({ image, alt, children }: Props) {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {children}
      </div>
    </section>
  );
}
