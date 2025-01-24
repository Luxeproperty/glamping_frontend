import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';

import { DotButton, useDotButton } from '../Carousel/CarouselDots';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../Carousel/CarouselButtons';

import C1_1 from './CarouselImages/CZ-1.jpg';
import C1_2 from './CarouselImages/CZ-2.jpg';
import C1_4 from './CarouselImages/CZ-4.jpg';
import C1_5 from './CarouselImages/CZ-5.jpg';
import C1_6 from './CarouselImages/CZ-6.jpg';
import C1_7 from './CarouselImages/CZ-7.jpg';
import C1_8 from './CarouselImages/CZ-8.jpg';
import C1_9 from './CarouselImages/CZ-9.jpg';
import C1_10 from './CarouselImages/CZ-10.jpg';
import C1_11 from './CarouselImages/CZ-11.jpg';
import C1_12 from './CarouselImages/CZ-12.jpg';
import C1_13 from './CarouselImages/CZ-13.jpg';
import C1_14 from './CarouselImages/CZ-14.jpg';
import C1_15 from './CarouselImages/CZ-15.jpg';

import C2_1 from './CarouselImages/YD1.jpg';
import C2_2 from './CarouselImages/YD2.jpg';
import C2_3 from './CarouselImages/YD3.jpg';
import C2_4 from './CarouselImages/YD4.jpg';
import C2_5 from './CarouselImages/YD5.jpg';
import C2_6 from './CarouselImages/YD6.jpg';
import C2_7 from './CarouselImages/YD7.jpg';
import C2_8 from './CarouselImages/YD8.jpg';
import C2_9 from './CarouselImages/YD9.jpg';

import C3_1 from './CarouselImages/C3_1.jpg';
import C3_2 from './CarouselImages/C3_2.jpg';
import C3_3 from './CarouselImages/C3_3.jpg';
import C3_4 from './CarouselImages/C3_4.jpg';
import C3_5 from './CarouselImages/C3_5.jpg';
import C3_6 from './CarouselImages/C3_6.jpg';
import C3_7 from './CarouselImages/C3_7.jpg';
import C3_8 from './CarouselImages/C3_8.jpg';
import C3_9 from './CarouselImages/C3_9.jpg';
import C3_10 from './CarouselImages/C3_10.jpg';

type PropType = {
  options?: EmblaOptionsType;
};

type CarouselArray = {
  title: string;
  description: React.ReactNode;
  images: string[];
};

const ChillZone: React.FC<PropType> = (props) => {
  const { options } = props;

  const mergedOptions: EmblaOptionsType = {
    containScroll: false,
    ...options
  };

  const carouselsArray: CarouselArray[] = [
    {
      title: 'The Chill Zone',
      description: `Step into our Chill Zone, the perfect place to bond, relax, and have a good time with the family. Whilst glamping in the picturesque English countryside is idyllic on dry days, the unpredictable English weather can sometimes force us indoors. Don't worry, we have you covered - enjoy bonding time with friends, family, or fellow glampers in our Chill Zone. We designed this dome to bring you closer to nature while offering a cosy shelter to brighten the rainy days. Come on in and have fun!`,
      images: [
        C1_1,
        C1_2,
        C1_4,
        C1_5,
        C1_6,
        C1_7,
        C1_8,
        C1_9,
        C1_10,
        C1_11,
        C1_12,
        C1_13,
        C1_14,
        C1_15
      ]
    },
    {
      title: 'Yoga Dome',
      description:
        'Welcome to our Yoga Dome, where you can relax, recharge and rejuvenate. Take a deep breath, stretch your body, return to nature, and to yourself. Whether you prefer morning yoga, Pilates, or an invigorating sound bath, this purpose-built dome is the perfect space - complete with stunning views and all the amenities you need at your fingertips. Enjoy a moment to yourself, spend quality time with a loved one, or why not invite a new friend staying in your neighbouring pod?',
      images: [C2_1, C2_2, C2_3, C2_4, C2_5, C2_6, C2_7, C2_8, C2_9]
    },
    {
      title: 'BBQ Station',
      description: (
        <div className="space-y-2">
          <p>
            Turn every gathering into a memorable BBQ experience with our
            easy-to-use, guest-friendly BBQ station! Perfectly designed for
            disposable BBQ trays, this station allows everyone to get involved
            in the fun and flavour of grilling with minimal fuss.
          </p>{' '}
          <p>
            {' '}
            The station features a dedicated area for guests to set up their
            disposable BBQs safely, ensuring a stable surface for cooking. Each
            guest has everything they need to grill their favourite foods to
            perfection. Whether they're cooking juicy burgers, skewers, or
            veggies, everyone can enjoy the experience of grilling.
          </p>{' '}
          <p>
            {' '}
            Ample space and utensils are provided for grilling. Once grilling is
            done, guests can easily dispose of the used BBQ trays in the bins
            provided, leaving minimal cleanup behind.
          </p>{' '}
          <p>
            {' '}
            Our BBQ station isn’t just a grilling spot; it’s a place for
            socialising, sharing, and creating delicious memories. No matter the
            occasion, you will love the freedom of grilling your meals in a
            simple, fun, and hassle-free way!
          </p>
        </div>
      ),
      images: [C3_1, C3_2, C3_3, C3_4, C3_5, C3_6, C3_7, C3_8, C3_9, C3_10]
    }
  ];

  return (
    <div className="max-w-screen mx-auto mb-4 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-8">
        {carouselsArray.map((carousel, colIndex) => {
          const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions, [
            Fade()
          ]);
          const { selectedIndex, scrollSnaps, onDotButtonClick } =
            useDotButton(emblaApi);
          const {
            prevBtnDisabled,
            nextBtnDisabled,
            onPrevButtonClick,
            onNextButtonClick
          } = usePrevNextButtons(emblaApi);
          const gridClasses =
            colIndex === 2 // Assuming BBQ Zone is the third item (index 2)
              ? 'lg:col-span-2 lg:row-start-2'
              : '';
          return (
            <div key={colIndex} className={`carousel-item ${gridClasses}`}>
              {/* Carousel container */}
              <div className="overflow-hidden relative" ref={emblaRef}>
                <div className="flex">
                  {carousel.images.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%]">
                      <img
                        loading="lazy"
                        className="rounded-2xl w-full h-[30rem] object-cover select-none"
                        src={image}
                        alt={`${carousel.title}_slide${index}`}
                      />
                    </div>
                  ))}
                </div>
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="opacity-50 hover:opacity-90 rounded-full bg-black text-white p-1 w-8 h-8 flex items-center justify-center"
                  />
                </div>
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="opacity-50 hover:opacity-90 rounded-full bg-black text-white p-1 w-8 h-8 flex items-center justify-center"
                  />
                </div>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {scrollSnaps.map((_, index) => (
                    <DotButton
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={`w-2 h-2 rounded-full cursor-pointer ring-2 ${
                        index === selectedIndex
                          ? 'bg-white ring-white'
                          : 'bg-transparent ring-white opacity-40'
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Title and description */}
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">{carousel.title}</h2>
                <p className="mt-3 text-base text-justify text-gray-600">
                  {carousel.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChillZone;
