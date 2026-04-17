import { RuledHeading } from "@/components/RuledHeading";

type Entry = { text: string; url?: string };

const articles: Entry[] = [
  {
    text: "AZCentral - Republic's 100 Essential Restaurants",
    url: "https://www.azcentral.com/picture-gallery/entertainment/dining/2026/01/05/welcome-diner-phoenix-restaurant/87109121007/",
  },
  {
    text: "Chowhound - Best Diner in Arizona",
    url: "https://www.chowhound.com/2041494/best-diners-every-us-state-list/",
  },
  {
    text: "Islands.com - Hands Down Best Diner is the Heart of Downtown Phoenix",
    url: "https://www.islands.com/2056226/welcome-diner-arizonas-hands-best-retro-gem-nestled-heart-downtown-phoenix/",
  },
  {
    text: "Best late night Dinning - Phoenix new times - Best of Phoenix",
    url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-late-night-dining-11363485",
  },
  {
    text: "Phoenix Times- Awesome Patio- Best of Phoenix",
    url: "https://www.phoenixnewtimes.com/best-of/2019/food-and-drink/best-patio-dining-11363483",
  },
  {
    text: "Food Network- Best Breakfast- best restaurants of phoenix",
    url: "https://www.foodnetwork.com/restaurants/az/tucson/welcome-diner-restaurant",
  },
  {
    text: "Phoenix New times - Best Biscuit and Gravy",
    url: "https://www.phoenixnewtimes.com/restaurants/best-biscuit-and-gravy-restaurants-phoenix-breakfast-11407013",
  },
  {
    text: "The Urbanist- A curators guide to phoenix",
    url: "http://nymag.com/urbanist/2019/09/phoenix-arizona-travel-guide-things-to-do-where-to-stay.html",
  },
  {
    text: "Best of Phoenix: Readers Choice: Best Late Night Dining",
    url: "https://www.phoenixnewtimes.com/best-of/2018/readers-choice/best-late-night-dining-10864956",
  },
  {
    text: "Best of Phoenix: Phoenix New Times: Best Glow Up",
    url: "https://www.phoenixnewtimes.com/best-of/2018/food-and-drink/best-glow-up-10860859",
  },
  {
    text: "Phoenix Magazine: The ultimate late night eats guide",
    url: "http://www.phoenixmag.com/food-reviews/the-ultimate-late-night-eats-guide.html",
  },
  {
    text: "Phoenix Business Journals: Welcome Diner closing, moving Phoenix location",
    url: "https://www.bizjournals.com/phoenix/news/2018/05/13/welcome-diner-closing-moving-phoenix-location.html",
  },
  { text: "Welcome Diner Will Have You Saying Thank You" },
  { text: "The 7 Best Pies In Metro Phoenix" },
  {
    text: "16 Arizona distillers, brewers, bartenders and others helping us drink smarter",
  },
  { text: "Phoenix New Times - The Eight Best Chicken Sandwiches in Phoenix" },
  { text: "Phoenix New Times - 5 Best Diners in Metro Phoenix" },
  {
    text: "ABC15 - Top 10 Restaurants for Mac and Cheese in 2017 According to Yelp",
  },
  { text: "Biz Journal - Yelp's 30 best restaurants across Phoenix" },
  {
    text: "AZ Central - Armato: 10 spots for the best french fries around Phoenix",
  },
  {
    text: "Tasting Table - Rise and Dine From Seattle to Boston, These are the Nation's Top Diners",
  },
  {
    text: "KTAR - Food blog names Welcome Diner in Phoenix best in Arizona",
  },
  { text: "Best Things Arizona \u2013 The 10 Best Diners in Arizona!" },
  { text: "Food & Wine \u2013 Where to Eat in Phoenix" },
  {
    text: "The State Press \u2013 Four Chambers Press and Welcome Diner team up to bring aspiring writers together",
  },
  {
    text: "Phoenix New Times \u2013 Michael Babcock of Welcome Diner Talks Food Trucks, Comfort Food, & Korean Fried Chicken",
  },
  {
    text: "The New York Times \u2013 Seeing Phoenix, for the Super Bowl and Beyond",
  },
  { text: "The Times \u2013 Foodies \u2018welcome\u2019 Phoenix diner" },
  {
    text: "Phoenix Magazine \u2013 Old Dixie's Southern Kitchen at Welcome Diner",
  },
  { text: "The State Press \u2013 Welcome Diner: A Local Love" },
  { text: "USA Today \u2013 50\u2019s Diners in Phoenix" },
  { text: "The Examiner \u2013 PB&B burger" },
  { text: "G/O Digital \u2013 The 10 Best Small Businesses of 2014" },
  {
    text: "Boston Globe \u2013 What to do in Phoenix: other than watch the Super Bowl",
  },
  { text: "AZ Big Media \u2013 50 Things You Must Eat in Phoenix" },
  { text: "Local First AZ \u2013 Small Wonders of Phoenix" },
  {
    text: "Four Chambers \u2013 Welcome Home: Poetry and Prose for Welcome Hospitality",
  },
  { text: "Phoenix New Times \u2013 Welcome to Dinerwood" },
  { text: "AZ Central \u2013 Dinerwood 3 film festival at Welcome Diner" },
  {
    text: "AZ Central \u2013 11/16: Bike-in movie at Civic Space Park, Phoenix",
  },
  { text: "The New York Times \u2013 36 Hours in Phoenix" },
];

const awards: Entry[] = [
  {
    text: "Thrillist Phoenix \u2013 Best Restaurant for Every Cuisine 2016",
    url: "https://www.thrillist.com/eat/phoenix/best-restaurants-in-phoenix-italian-mexican-chinese-burgers",
  },
  { text: "Phoenix Magazine \u2013 Best Fried Chicken 2015", url: "http://www.phoenixmag.com/best-of-the-valley/food-drink.html" },
  {
    text: "Phoenix New Times \u2013 100 Favorite Dishes 2015",
    url: "http://www.phoenixnewtimes.com/restaurants/100-favorite-dishes-2015-fried-green-tomato-sandwich-at-welcome-diner-7460207",
  },
  {
    text: "AZ Big Media \u2013 50 Things You Must Eat in Phoenix 2015",
    url: "http://azbigmedia.com/travel/50-things-you-must-eat-in-phoenix",
  },
  { text: "Phoenix New Times \u2013 Best Friday Hangout 2015", url: "http://www.phoenixnewtimes.com/best-of" },
  { text: "USA Today \u2013 10 Best Phoenix Brunch 2014", url: "http://experience.usatoday.com/weekend/story/phoenix/2014/03/06/10-best-foodie-spots-phoenix/6127305/" },
  { text: "USA Today \u2013 10 Best Late Night Brunch 2014" },
  { text: "USA Today \u2013 10 Best Restaurant in Roosevelt Row 2014" },
  { text: "G/O Digital \u2013 10 Best Small Businesses of 2014" },
  { text: "Phoenix New Times \u2013 Best Sandwich 2014", url: "http://www.phoenixnewtimes.com/best-of/2014/food-and-drink/best-sandwich-6471538" },
  { text: "Phoenix New Times \u2013 Best After-Hours 2014" },
  { text: "Phoenix Magazine \u2013 Best Fried Chicken 2013" },
  { text: "Phoenix New Times \u2013 Best Diner 2013", url: "http://www.phoenixnewtimes.com/best-of/2013/food-and-drink/best-diner-6471187" },
  { text: "Arizona Republic \u2013 Best Pop Up 2012", url: "http://archive.azcentral.com/best/2012/critics/dining_food/articles/20120319welcome-diner-best-pop-up-restaurant.html" },
  { text: "Phoenix New Times \u2013 Best Pop Up Restaurant 2011", url: "http://www.phoenixnewtimes.com/best-of/2011/food-and-drink/best-pop-up-restaurant-6469734" },
  { text: "Phoenix New Times \u2013 Best Place to Meet a Stranger 2009", url: "http://www.phoenixnewtimes.com/best-of/2009/food-and-drink/best-place-to-meet-a-stranger-6468619" },
  { text: "Phoenix New Times \u2013 Best Fries 2008", url: "http://www.phoenixnewtimes.com/best-of/2008" },
];

const reviews: Entry[] = [
  { text: "Phoenix Magazine \u2013 Old Dixie's at Welcome Diner", url: "http://www.phoenixmag.com/Food-Reviews/old-dixie-s-at-welcome-diner.html" },
  {
    text: "Phoenix New Times \u2013 Good Gravy! Welcome Diner in Downtown Phoenix Serves Up Southern Charm",
    url: "http://www.phoenixnewtimes.com/restaurants/good-gravy-welcome-diner-in-downtown-phoenix-serves-up-southern-charm-6458463",
  },
  {
    text: "AZ Central \u2013 Review: Welcome Diner in Phoenix's Garfield District",
    url: "http://www.azcentral.com/story/entertainment/dining/2014/11/11/review-welcome-diner-phoenixs-garfield-district/18852247/",
  },
  { text: "Yelp \u2013 Welcome Diner", url: "http://www.yelp.com/biz/welcome-diner-phoe" },
  { text: "Tripadvisor \u2013 Welcome Diner", url: "https://www.tripadvisor.com/Restaurant_Review-g31310-d3958255-Reviews-Welcome_Diner-Phoenix_Arizona.html" },
];

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-center">
      {entries.map((e, i) => (
        <li key={i}>
          {e.url ? (
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-accent"
            >
              {e.text}
            </a>
          ) : (
            <span className="text-brand-fg">{e.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Mentions() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <RuledHeading>Articles</RuledHeading>
      <EntryList entries={articles} />

      <div className="mt-12">
        <RuledHeading>Awards</RuledHeading>
        <EntryList entries={awards} />
      </div>

      <div className="mt-12">
        <RuledHeading>Reviews</RuledHeading>
        <EntryList entries={reviews} />
      </div>
    </section>
  );
}
