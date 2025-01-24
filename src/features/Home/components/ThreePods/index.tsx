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

import C1_1 from './CarouselImages/C1-1.jpg';
import C1_2 from './CarouselImages/C1-2.jpg';
import C1_3 from './CarouselImages/C1-3.jpg';
import C1_4 from './CarouselImages/C1-4.jpg';
import C1_5 from './CarouselImages/C1-5.jpg';
import C1_6 from './CarouselImages/C1-6.jpg';
import C1_7 from './CarouselImages/C1-7.jpg';
import C1_8 from './CarouselImages/C1-8.jpg';
import C1_9 from './CarouselImages/C1-9.jpg';
import C1_10 from './CarouselImages/C1-10.jpg';
import C1_11 from './CarouselImages/C1-11.jpg';
import C1_12 from './CarouselImages/C1-12.jpg';

import C2_1 from './CarouselImages/C2-1.jpg';
import C2_2 from './CarouselImages/C2-2.jpg';
import C2_3 from './CarouselImages/C2-3.jpg';
import C2_4 from './CarouselImages/C2-4.jpg';
import C2_5 from './CarouselImages/C2-5.jpg';
import C2_6 from './CarouselImages/C2-6.jpg';
import C2_7 from './CarouselImages/C2-7.jpg';
import C2_8 from './CarouselImages/C2-8.jpg';
import C2_9 from './CarouselImages/C2-9.jpg';
import C2_10 from './CarouselImages/C2-10.jpg';
import C2_11 from './CarouselImages/C2-11.jpg';
import C2_12 from './CarouselImages/C2-12.jpg';

import C3_1 from './CarouselImages/C3-1.jpg';
import C3_2 from './CarouselImages/C3-2.jpg';
import C3_3 from './CarouselImages/C3-3.jpg';
import C3_4 from './CarouselImages/C3-4.jpg';
import C3_5 from './CarouselImages/C3-5.jpg';
import C3_6 from './CarouselImages/C3-6.jpg';
import C3_7 from './CarouselImages/C3-7.jpg';
import C3_8 from './CarouselImages/C3-8.jpg';
import C3_9 from './CarouselImages/C3-9.jpg';
import C3_10 from './CarouselImages/C3-10.jpg';
import C3_11 from './CarouselImages/C3-11.jpg';
import C3_12 from './CarouselImages/C3-12.jpg';
import C3_13 from './CarouselImages/C3-13.jpg';
import C3_14 from './CarouselImages/C3-14.jpg';
import C3_15 from './CarouselImages/C3-15.jpg';

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;

  const mergedOptions: EmblaOptionsType = {
    containScroll: false,
    ...options
  };

  const carouselsArray = [
    {
      title: 'Family Pod',
      description:
        'Get away with the children and escape the iPad and mobile phones as you take full advantage of the “Family Pod”. Its open plan design allows you all to stay close and really enjoy the ultimate “Family Glamping” experience.',
      images: [
        C1_1,
        C1_2,
        C1_3,
        C1_4,
        C1_5,
        C1_6,
        C1_7,
        C1_8,
        C1_9,
        C1_10,
        C1_11,
        C1_12
      ]
    },
    {
      title: 'The Cosy',
      description:
        'Think “get away” Think “snuggled up” Think “Cosy” this is the perfect pod for those well needed “escape the city” breaks. Enjoy a morning cup of tea overlooking the rolling hills of Durham, go on a nature walk or make the most of our yoga studio and reconnect.',
      images: [
        C2_1,
        C2_2,
        C2_3,
        C2_4,
        C2_5,
        C2_6,
        C2_7,
        C2_8,
        C2_9,
        C2_10,
        C2_11,
        C2_12
      ]
    },
    {
      title: 'The Hideaway',
      description: `The clue is in the name. Enjoy all this pod has to offer. Size, comfort, privacy, and most of all, being set back and hidden away whilst still being the core of the site. With all the extras this pod has to offer you won't want to leave.`,
      images: [
        C3_1,
        C3_2,
        C3_3,
        C3_4,
        C3_5,
        C3_6,
        C3_7,
        C3_8,
        C3_9,
        C3_10,
        C3_11,
        C3_12,
        C3_13,
        C3_14,
        C3_15
      ]
    }
  ];

  return (
    <div className="max-w-screen mx-auto mb-4 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          return (
            <div key={colIndex} className="carousel-item">
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
                <p className="mt-3 text-base text-gray-600">
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

export default EmblaCarousel;
