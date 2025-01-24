import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Compare } from './compare';
import Coffee from '../images/Coffee.webp';
import Breakfast from '../images/Breakfast.webp';

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const The68CafePage = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-auto max-w-7xl mx-auto">
      {/* Foreword Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">The 68 Café</h1>
        <p className="mt-4 font-bold text-xl text-gray-600">
          GREAT FOOD. FROM EVEN GREATER PLACES.
        </p>
        <p className="mt-4 text-lg text-gray-500">
          Welcome to The 68 Café where some of the region’s best produce comes
          together to give you a fresh hearty menu. Discover local coffee
          roasters, organic beverages, and local produce delivered right to our
          doorstep for a brunch to remember.
        </p>
        <p className="mt-4 text-lg text-gray-500">
          On the go? Ask us to ‘picnic’ it up for you so you can enjoy it with
          friends and family on one of the many Durham trails or soak in the
          rays in a sunny field!
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {cards.map((card, i) => (
          <div
            key={i}
            className={cn(
              card.className,
              'relative overflow-hidden rounded-2xl'
            )}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative cursor-pointer rounded-2xl"
              layoutId={`card-${card.id}`}
            >
              <ImageComponent card={card} />
            </motion.div>
          </div>
        ))}
      </div>

      <CompareDemo />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className="object-cover w-full h-[25rem] rounded-2xl"
    />
  );
};

function CompareDemo() {
  return (
    <div className="my-10 flex justify-center rounded-3xl dark:bg-neutral-900 dark:border-neutral-800 ">
      <Compare
        firstImage={Coffee}
        secondImage={Breakfast}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[300px] w-[340px] md:h-[500px] md:w-[800px]"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
