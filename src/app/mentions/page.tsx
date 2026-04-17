const press: { publication: string; quote?: string; url: string }[] = [
  {
    publication: "AZ Central",
    quote: "Republic's 100 Essential Restaurants",
    url: "https://www.azcentral.com/picture-gallery/entertainment/dining/2026/01/05/welcome-diner-phoenix-restaurant/87109121007/",
  },
  {
    publication: "Chowhound",
    quote: "Best Diner in Arizona",
    url: "https://www.chowhound.com/2041494/best-diners-every-us-state-list/",
  },
  {
    publication: "Islands.com",
    quote: "Hands Down Best Diner is the Heart of Downtown Phoenix",
    url: "https://www.islands.com/2056226/welcome-diner-arizonas-hands-best-retro-gem-nestled-heart-downtown-phoenix/",
  },
  {
    publication: "Phoenix New Times",
    quote: "Best Late Night Dining — Best of Phoenix",
    url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-late-night-dining-11363485",
  },
  {
    publication: "Phoenix New Times",
    quote: "Awesome Patio — Best of Phoenix",
    url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-patio-dining-11363483",
  },
  {
    publication: "Food Network",
    quote: "Best Breakfast — Best Restaurants of Phoenix",
    url: "https://www.foodnetwork.com/restaurants/az/tucson/welcome-diner-restaurant",
  },
  {
    publication: "Phoenix New Times",
    quote: "Best Biscuit and Gravy",
    url: "https://www.phoenixnewtimes.com/restaurants/best-biscuit-and-gravy-restaurants-phoenix-breakfast-11407013",
  },
  {
    publication: "The Urbanist",
    quote: "A curator's guide to Phoenix",
    url: "http://nymag.com/urbanist/2019/09/phoenix-arizona-travel-guide-things-to-do-where-to-stay.html",
  },
  {
    publication: "Best of Phoenix — Readers' Choice",
    quote: "Best Late Night Dining",
    url: "https://www.phoenixnewtimes.com/best-of/2018/readers-choice/best-late-night-dining-10864956",
  },
  {
    publication: "Phoenix New Times",
    quote: "Best Glow Up",
    url: "https://www.phoenixnewtimes.com/best-of/2018/food-and-drink/best-glow-up-10860859",
  },
  {
    publication: "Phoenix Magazine",
    quote: "The Ultimate Late Night Eats Guide",
    url: "http://www.phoenixmag.com/food-reviews/the-ultimate-late-night-eats-guide.html",
  },
  {
    publication: "Thrillist",
    quote: "Best Restaurant for Every Cuisine 2016",
    url: "https://www.thrillist.com/eat/phoenix/best-restaurants-in-phoenix-italian-mexican-chinese-burgers",
  },
  {
    publication: "Phoenix New Times",
    quote: "100 Favorite Dishes 2015 — Fried Green Tomato Sandwich",
    url: "http://www.phoenixnewtimes.com/restaurants/100-favorite-dishes-2015-fried-green-tomato-sandwich-at-welcome-diner-7460207",
  },
  {
    publication: "USA Today",
    quote: "10 Best Phoenix Brunch 2014",
    url: "http://experience.usatoday.com/weekend/story/phoenix/2014/03/06/10-best-foodie-spots-phoenix/6127305/",
  },
  {
    publication: "Phoenix New Times",
    quote: "Best Diner 2013",
    url: "http://www.phoenixnewtimes.com/best-of/2013/food-and-drink/best-diner-6471187",
  },
];

export default function Mentions() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="eyebrow text-center mb-10">Mentions</h1>
      <ul className="space-y-3 text-sm leading-6">
        {press.map((p, i) => (
          <li key={i}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent"
            >
              <span className="font-semibold">{p.publication}</span>
              {p.quote && <span className="text-brand-muted"> — {p.quote}</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
