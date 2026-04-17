import { PurveyorCard } from "@/components/molecules/PurveyorCard";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { images } from "@/data/images";

const purveyors = [
  {
    eyebrow: "Grain",
    name: "Hayden Flour Mills",
    body: "Heritage wheat grown and milled in Queen Creek, Arizona.",
    image: images.purveyorGrain,
    alt: "Heritage grain",
  },
  {
    eyebrow: "Sausage",
    name: "Schreiner's Fine Sausage",
    body: "Phoenix-rooted sausage maker, family-run since 1955.",
    image: images.purveyorSausage,
    alt: "Fine sausage",
  },
  {
    eyebrow: "Bread",
    name: "Noble Bread",
    body: "Artisan sourdough and country loaves, baked daily.",
    image: images.purveyorBread,
    alt: "Crusty sourdough",
  },
  {
    eyebrow: "Produce",
    name: "McClendon's Select",
    body: "Family-run organic produce from the East Valley.",
    image: images.purveyorProduce,
    alt: "Fresh produce",
  },
  {
    eyebrow: "Eggs",
    name: "Hickman's Family Farms",
    body: "Arizona-laid eggs from a family operation since 1944.",
    image: images.purveyorEggs,
    alt: "Fresh eggs",
  },
  {
    eyebrow: "Farm",
    name: "Crooked Sky Farms",
    body: "Regenerative farming partners in the valley.",
    image: images.purveyorFarm,
    alt: "Farm field",
  },
];

export function PurveyorGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {purveyors.map((p) => (
          <RevealOnView key={p.name} amount={0.2}>
            <PurveyorCard {...p} />
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
