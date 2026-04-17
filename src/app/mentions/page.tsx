import { RuledHeading } from "@/components/RuledHeading";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { DisplayText } from "@/components/atoms/DisplayText";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { IconArrow } from "@/components/atoms/IconArrow";
import { PressStrip } from "@/components/molecules/PressStrip";

type Entry = { text: string; url?: string };

const articles: Entry[] = [
  { text: "AZCentral — Republic's 100 Essential Restaurants", url: "https://www.azcentral.com/picture-gallery/entertainment/dining/2026/01/05/welcome-diner-phoenix-restaurant/87109121007/" },
  { text: "Chowhound — Best Diner in Arizona", url: "https://www.chowhound.com/2041494/best-diners-every-us-state-list/" },
  { text: "Islands.com — Best Diner in Downtown Phoenix", url: "https://www.islands.com/2056226/welcome-diner-arizonas-hands-best-retro-gem-nestled-heart-downtown-phoenix/" },
  { text: "Phoenix New Times — Best Late Night Dining", url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-late-night-dining-11363485" },
  { text: "Phoenix New Times — Awesome Patio", url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-patio-dining-11363483" },
  { text: "Food Network — Best Breakfast", url: "https://www.foodnetwork.com/restaurants/az/tucson/welcome-diner-restaurant" },
  { text: "Phoenix New Times — Best Biscuit and Gravy", url: "https://www.phoenixnewtimes.com/restaurants/best-biscuit-and-gravy-restaurants-phoenix-breakfast-11407013" },
  { text: "The Urbanist — A curator's guide to Phoenix", url: "http://nymag.com/urbanist/2019/09/phoenix-arizona-travel-guide-things-to-do-where-to-stay.html" },
  { text: "Best of Phoenix (Readers' Choice) — Best Late Night Dining", url: "https://www.phoenixnewtimes.com/best-of/2018/readers-choice/best-late-night-dining-10864956" },
  { text: "Phoenix New Times — Best Glow Up", url: "https://www.phoenixnewtimes.com/best-of/2018/food-and-drink/best-glow-up-10860859" },
  { text: "Phoenix Magazine — Ultimate Late Night Eats Guide", url: "http://www.phoenixmag.com/food-reviews/the-ultimate-late-night-eats-guide.html" },
  { text: "Phoenix Business Journal — Welcome Diner moves Phoenix location", url: "https://www.bizjournals.com/phoenix/news/2018/05/13/welcome-diner-closing-moving-phoenix-location.html" },
];

const awards: Entry[] = [
  { text: "Thrillist — Best Restaurant for Every Cuisine 2016", url: "https://www.thrillist.com/eat/phoenix/best-restaurants-in-phoenix-italian-mexican-chinese-burgers" },
  { text: "Phoenix Magazine — Best Fried Chicken 2015", url: "http://www.phoenixmag.com/best-of-the-valley/food-drink.html" },
  { text: "Phoenix New Times — 100 Favorite Dishes 2015", url: "http://www.phoenixnewtimes.com/restaurants/100-favorite-dishes-2015-fried-green-tomato-sandwich-at-welcome-diner-7460207" },
  { text: "Phoenix New Times — Best Diner 2013", url: "http://www.phoenixnewtimes.com/best-of/2013/food-and-drink/best-diner-6471187" },
  { text: "Arizona Republic — Best Pop Up 2012", url: "http://archive.azcentral.com/best/2012/critics/dining_food/articles/20120319welcome-diner-best-pop-up-restaurant.html" },
];

const reviews: Entry[] = [
  { text: "Phoenix Magazine — Old Dixie's at Welcome Diner", url: "http://www.phoenixmag.com/Food-Reviews/old-dixie-s-at-welcome-diner.html" },
  { text: "Phoenix New Times — Southern Charm", url: "http://www.phoenixnewtimes.com/restaurants/good-gravy-welcome-diner-in-downtown-phoenix-serves-up-southern-charm-6458463" },
  { text: "AZ Central — Review: Welcome Diner", url: "http://www.azcentral.com/story/entertainment/dining/2014/11/11/review-welcome-diner-phoenixs-garfield-district/18852247/" },
  { text: "Yelp — Welcome Diner", url: "http://www.yelp.com/biz/welcome-diner-phoe" },
  { text: "Tripadvisor — Welcome Diner", url: "https://www.tripadvisor.com/Restaurant_Review-g31310-d3958255-Reviews-Welcome_Diner-Phoenix_Arizona.html" },
];

function EntryRow({ entry }: { entry: Entry }) {
  const body = (
    <span className="group inline-flex items-center gap-2">
      <span className="border-b border-transparent transition-colors duration-300 group-hover:text-terracotta group-hover:border-terracotta">
        {entry.text}
      </span>
      {entry.url && (
        <IconArrow
          size={14}
          className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </span>
  );
  return (
    <li className="py-1">
      {entry.url ? (
        <a href={entry.url} target="_blank" rel="noopener noreferrer">
          {body}
        </a>
      ) : (
        body
      )}
    </li>
  );
}

function Section({ label, entries }: { label: string; entries: Entry[] }) {
  return (
    <div className="mt-14 first:mt-0">
      <RuledHeading>{label}</RuledHeading>
      <ul className="mt-6 space-y-1 text-sm leading-6 text-center text-ink">
        {entries.map((e, i) => (
          <EntryRow key={i} entry={e} />
        ))}
      </ul>
    </div>
  );
}

export default function Mentions() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-16 text-center">
        <RevealOnView>
          <Eyebrow className="text-terracotta">Press</Eyebrow>
          <DisplayText as="h1" size="lg" className="mt-2">
            In good company.
          </DisplayText>
        </RevealOnView>
      </section>

      <PressStrip linkToMentions={false} />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <RevealOnView>
          <blockquote className="display italic text-center text-3xl md:text-4xl leading-snug text-ink">
            &ldquo;Arizona&rsquo;s retro gem in the heart of downtown Phoenix.&rdquo;
            <footer className="mt-4 text-xs not-italic tracking-[0.3em] uppercase text-brass">
              — Islands.com
            </footer>
          </blockquote>
        </RevealOnView>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <Section label="Articles" entries={articles} />
        <Section label="Awards" entries={awards} />
        <Section label="Reviews" entries={reviews} />
      </section>
    </>
  );
}
