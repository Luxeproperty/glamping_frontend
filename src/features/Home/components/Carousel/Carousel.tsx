import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselButtons';
import { DotButton, useDotButton } from './CarouselDots';
import './css/embla.css';
import firstSlide from './images/C1.jpg';
import secondSlide from './images/C2.jpg';
import thirdSlide from './images/C3.jpg';
import fourthSlide from './images/C5.jpg';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType; // Options prop allows you to pass custom carousel options
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;

  // Set default options
  const mergedOptions: EmblaOptionsType = {
    containScroll: false, // Default option to avoid confusing UX
    ...options // Merge user-provided options (if any)
  };

  // Initialize the Embla Carousel with options and Fade plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions, [
    Fade(),
    Autoplay({ playOnInit: true, delay: 3000 })
  ]);

  // Custom hooks for dots and navigation buttons
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const TITLE = '1.8 Acres of Escapism';

  const slidesArray = [
    {
      image: firstSlide,
      title: TITLE,
      description:
        "Purpose-built lodges in the heart of Northeast England's County Durham.  For those needing only the sound of silence and crackling of the fire. A place where only the birds and the trees are boisterous."
    },
    {
      image: secondSlide,
      title: TITLE,
      description:
        "Purpose-built lodges in the heart of Northeast England's County Durham.  For those needing only the sound of silence and crackling of the fire. A place where only the birds and the trees are boisterous."
    },
    {
      image: firstSlide,
      title: TITLE,
      description:
        "Purpose-built lodges in the heart of Northeast England's County Durham.  For those needing only the sound of silence and crackling of the fire. A place where only the birds and the trees are boisterous."
    },
    {
      image: thirdSlide,
      title: TITLE,
      description:
        "Purpose-built lodges in the heart of Northeast England's County Durham.  For those needing only the sound of silence and crackling of the fire. A place where only the birds and the trees are boisterous."
    },
    {
      image: fourthSlide,
      title: TITLE,
      description:
        "Purpose-built lodges in the heart of Northeast England's County Durham.  For those needing only the sound of silence and crackling of the fire. A place where only the birds and the trees are boisterous."
    }
  ];

  return (
    <div className="max-w-screen mx-auto mb-4 mt-3">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex ">
          {slidesArray.map((slide, index) => (
            <div className="flex-[0_0_100%]  relative" key={index}>
              {/* Image */}
              <img
                loading="lazy"
                className="rounded-2xl w-full h-[25rem] object-cover select-none"
                src={slide.image}
                alt="Your alt text"
              />

              {/* Overlay */}
              <div className="rounded-2xl absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start p-12">
                <div className="p-8 text-left text-white md:w-1/2">
                  <h2 className="text-xl lg:text-3xl font-bold mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-sm font-extralight lg:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-4 mt-6">
        <div className="ml-3 embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center space-x-3 mr-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-4 h-4 flex items-center justify-center rounded-full cursor-pointer ring-4 ${
                index === selectedIndex
                  ? 'bg-transparent ring-gray-900' // Active state: darker ring and bg
                  : 'bg-transparent ring-gray-300' // Inactive state: lighter ring, no bg
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
