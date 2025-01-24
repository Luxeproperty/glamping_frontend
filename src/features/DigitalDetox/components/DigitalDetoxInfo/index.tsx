import { twMerge } from 'tailwind-merge';
import { TracingBeam } from './TracingBeam';
import image1 from './images/Image1.webp';
import image2 from './images/NT2.webp';
import image3 from './images/3Fish.webp';
import image4 from './images/Waterfalls4.webp';
import { FocusCards } from './FocusCards';

import image11 from './images/Smoothie-1.webp';
import image12 from './images/yoga-1-1.webp';
import image13 from './images/TrailMap.webp';
import image14 from './images/Journal.webp';
import { HeroHighlight, Highlight } from './HeroHighlight';
import { motion } from 'framer-motion';

export function DigitalDetoxInfo() {
  const cards = [
    {
      title: 'Daily green detox smoothie',
      src: image11
    },
    {
      title: 'Morning yoga and meditation class',
      src: image12
    },
    {
      title: 'Trail maps for your walks',
      src: image13
    },
    {
      title: 'Your own journal to write and reflect',
      src: image14
    }
  ];

  function HeroHighlightDemo() {
    return (
      <HeroHighlight className="">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0]
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-extrabold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Put Life on Mute for a Moment.
          <br />
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0]
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="text-2xl px-4 md:text-2xl lg:text-2xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            {' '}
            Wake up in the morning focusing on the sound of birds instead of
            digital tweets. This is why we’ve curated the{' '}
            <Highlight className="text-2xl text-black dark:text-white">
              Digital Detox experience.
            </Highlight>{' '}
          </motion.p>
        </motion.h1>
        <div className="flex items-center justify-center">
          <motion.h4
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0]
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="text-base px-4 md:text-4xl lg:text-2xl font-normal text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            {' '}
            Designed to escape the cyber stresses and social media envy. The
            only connection that matters is the one with mother nature.
          </motion.h4>
        </div>
      </HeroHighlight>
    );
  }
  return (
    <>
      <div className="py-10">
        <div className="mb-8">
          <HeroHighlightDemo />
        </div>
        <div className="px-1 lg:px-10">
          <FocusCards cards={cards} />
        </div>
      </div>
      <TracingBeam className="py-10 mt-16">
        <div className="max-w-2xl px-1 lg:px-10 mx-auto antialiased pt-4 relative w-full">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h3 className={twMerge('text-4xl mb-4 font-bold')}>
                {item.title}
              </h3>

              {/* Adjusted height and responsiveness for better image display */}
              <div className="w-full h-auto md:h-[500px] rounded-2xl mb-10 overflow-hidden">
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className={`${index === 1 ? 'object-top' : ''} object-cover w-full h-full rounded-2xl`}
                />
              </div>

              <div className="text-base prose prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: 'Welcome to Durham',
    description: (
      <>
        <p>Home of castles, UNESCO heritage sights,</p>
        <p> REFINED DINING DESTINATIONS & endless forest trails</p>

        <p>
          Durham's World Heritage Site was inscribed by UNESCO in 1986 in
          recognition of its Outstanding Universal Value and Durham Cathedral
          represents one of the finest examples of Norman architecture in
          Europe.
        </p>
      </>
    ),
    badge: '',
    image: image1
  },
  {
    title: 'National Treasures',
    description: (
      <>
        <p>
          Within the county, sites such as Crook Hall & Gardens, Washington Old
          Hall and the Bowers Museum at Barnard Castle can be easily accessed by
          car. These historical gems make for idyllic family days out packed
          with knowledge and adventure.
        </p>
      </>
    ),
    badge: '',
    image: image2
  },
  {
    title: 'O-Fish-ially Delicious',
    description: (
      <>
        <p>
          County Durham’s expansive coastline allows for a vast variety of fish
          and seafood for ones plate. Head to one of the many best towns to
          enjoy seafood in such as Seaham and Horden.
        </p>
        <p>
          For those more turf than surf, the rolling hills of the region sets
          the scene for delightful country pubs such as the The Black Bull Inn
          at Frosterley.
        </p>
      </>
    ),
    badge: '',
    image: image3
  },
  {
    title: 'Waterfall Trails',
    description: (
      <>
        <p>
          Durham is home to many waterfalls across its nature reserves. But at
          180m, Caldron Snout Waterfall in Barnard Castle, is the longest
          waterfall in the UK and is fed from Cow Green Reservoir. It can be
          reached by a gentle 3km walk uphill and well worth the walk for an
          expansive scenery.
        </p>
      </>
    ),
    badge: '',
    image: image4
  }
];
