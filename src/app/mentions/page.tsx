import { PressCard, type PressData } from "@/components/PressCard";

const press: PressData[] = [
  {
    publication: "AZ Central",
    quote: "100 Essential Restaurants",
    url: "https://www.azcentral.com/picture-gallery/entertainment/dining/2026/01/05/welcome-diner-phoenix-restaurant/87109121007/",
  },
  {
    publication: "Chowhound",
    quote: "Best Diner in Arizona",
    url: "https://www.chowhound.com/2041494/best-diners-every-us-state-list/",
  },
  {
    publication: "Islands.com",
    quote: "Best diner in the heart of downtown Phoenix",
    url: "https://www.islands.com/2056226/welcome-diner-arizonas-hands-best-retro-gem-nestled-heart-downtown-phoenix/",
  },
  {
    publication: "Phoenix New Times",
    quote: "Best Late Night Dining",
    url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-late-night-dining-11363485",
  },
  {
    publication: "Phoenix New Times",
    quote: "Best Patio Dining",
    url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-patio-dining-11363483",
  },
  {
    publication: "Food Network",
    quote: "Best Breakfast in Phoenix",
    url: "https://www.foodnetwork.com/restaurants/az/tucson/welcome-diner-restaurant",
  },
  {
    publication: "Phoenix New Times",
    quote: "Best Biscuits & Gravy",
    url: "https://www.phoenixnewtimes.com/restaurants/best-biscuit-and-gravy-restaurants-phoenix-breakfast-11407013",
  },
  {
    publication: "New York Magazine — The Urbanist",
    quote: "A curator's guide to Phoenix",
    url: "http://nymag.com/urbanist/2019/09/phoenix-arizona-travel-guide-things-to-do-where-to-stay.html",
  },
  {
    publication: "Thrillist",
    quote: "Best Restaurants in Phoenix",
    url: "https://www.thrillist.com/eat/phoenix/best-restaurants-in-phoenix-italian-mexican-chinese-burgers",
  },
];

export default function Mentions() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-display text-4xl md:text-5xl uppercase tracking-widest text-center mb-10">
        Mentions
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {press.map((p, i) => (
          <PressCard key={`${p.publication}-${i}`} press={p} />
        ))}
      </div>
    </section>
  );
}
