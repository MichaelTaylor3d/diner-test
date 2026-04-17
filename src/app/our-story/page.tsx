import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { DropCap } from "@/components/atoms/DropCap";
import { PullQuote } from "@/components/molecules/PullQuote";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { images } from "@/data/images";

export default function OurStory() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 space-y-10">
      <header className="text-center">
        <Eyebrow className="text-terracotta">Our Story</Eyebrow>
        <DisplayText as="h1" size="lg" className="mt-2">
          A farm-to-table diner with a Sonoran accent.
        </DisplayText>
      </header>

      <RevealOnView>
        <DropCap>
          Welcome Diner is a farm to table, American fare diner in the
          Southwest/Sonoran Desert with roots in a Southern tinge. We scratch cook
          with the finest ingredients — made with integrity by our purveyor
          partners. We prize providing our guests with genuine hospitality.
        </DropCap>
      </RevealOnView>

      <ParallaxImage
        src={images.storySpace}
        alt="Our dining room"
        width={1400}
        height={900}
        className="relative w-full h-auto"
      />

      <RevealOnView>
        <p className="text-base leading-7">
          The Welcome Diner sits on the southwest corner of the 4 Corners
          commercial hub of 10th Street and Pierce, embedded in the historic
          Garfield neighborhood of Downtown Phoenix. We started our hospitality
          journey in Garfield over 15 years ago — humbly, in a 200 square foot
          space — and had some epic times to boot throughout the years. We moved
          into our new digs in the late spring of &rsquo;18. The Diner is
          committed to Garfield as it continues to evolve.
        </p>
      </RevealOnView>

      <RevealOnView>
        <PullQuote attribution="Welcome Diner team">
          Our greatest hope is that Welcome Diner, for many years to come, will
          be a community asset for you and yours.
        </PullQuote>
      </RevealOnView>

      <ParallaxImage
        src={images.storyPlates}
        alt="Plates on the line"
        width={1400}
        height={900}
        className="relative w-full h-auto"
      />

      <RevealOnView>
        <p className="text-base leading-7">
          The new space is a collaboration between our neighbor architecture
          firm, Kaiserworks, and Welcome&rsquo;s sister affiliate, Martha + Mary
          Studio. An amazing group of homies joined in: Welcome team members and
          regulars, Randal Wilson, Pueblo, Jon Haddock, Loud Luggage, Doug
          Abrahamson, soldierleisure, Randy Slack, Danelle Hacche, Vince Droney,
          Matt Minarjes and many others.
        </p>
      </RevealOnView>

      <p className="display italic text-2xl text-center text-terracotta">
        We look forward to serving you.
      </p>
    </article>
  );
}
