// import { Button } from '@/components/ui/button';
import theHideaway from './theHideawayMain.jpg';
import theHideaway2 from '../../features/Home/components/ThreePods/CarouselImages/C3-6.jpg';

import theHideaway3 from '../../features/Home/components/ThreePods/CarouselImages/C3-4.jpg';

import theHideaway4 from '../../features/Home/components/ThreePods/CarouselImages/C3-7.jpg';
import { podsData } from '@/lib/data';
import { HoverEffect } from '@/components/common/CardHover';
import { Grid, GridItem } from '@/components/common/Grid';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import C3_1 from '../Home/components/ThreePods/CarouselImages/C3-1.jpg';
import C3_2 from '../Home/components/ThreePods/CarouselImages/C3-2.jpg';
import C3_3 from '../Home/components/ThreePods/CarouselImages/C3-3.jpg';
import C3_4 from '../Home/components/ThreePods/CarouselImages/C3-4.jpg';
import C3_5 from '../Home/components/ThreePods/CarouselImages/C3-5.jpg';
import C3_6 from '../Home/components/ThreePods/CarouselImages/C3-6.jpg';
import C3_7 from '../Home/components/ThreePods/CarouselImages/C3-7.jpg';
import C3_8 from '../Home/components/ThreePods/CarouselImages/C3-8.jpg';
import C3_9 from '../Home/components/ThreePods/CarouselImages/C3-9.jpg';
import C3_10 from '../Home/components/ThreePods/CarouselImages/C3-10.jpg';
import C3_11 from '../Home/components/ThreePods/CarouselImages/C3-11.jpg';
import C3_12 from '../Home/components/ThreePods/CarouselImages/C3-12.jpg';
import C3_13 from '../Home/components/ThreePods/CarouselImages/C3-13.jpg';
import C3_14 from '../Home/components/ThreePods/CarouselImages/C3-14.jpg';
import C3_15 from '../Home/components/ThreePods/CarouselImages/C3-15.jpg';
import { Button } from '@/components/ui/button';

export function TheHideAway() {
  const podData = podsData.find((pod) => pod.name === 'The Hideaway');
  if (!podData) return <div>Pod data not found</div>;
  const { podInfo } = podData;
  const images = [
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
  ];
  return (
    <div className="w-full h-auto max-w-7xl mx-auto">
      <div className="mx-10 mt-10 max-w-7xl rounded overflow-hidden hidden lg:flex lg:justify-center lg:items-center">
        <BentoGrid />
      </div>
      <div className="m-10 max-w-8xl rounded overflow-hidden flex lg:hidden">
        <img src={theHideaway} />
      </div>

      <div className="mx-10 mt-2 text-right">
        <PhotoProvider>
          <PhotoView src={images[0]}>
            <Button className="rounded-sm w-52">
              <div className="grid grid-cols-2">
                Show all photos{' '}
                <span className="text-right text-white/70">
                  {images.length}
                </span>
              </div>
            </Button>
          </PhotoView>

          <div style={{ display: 'none' }}>
            {images.slice(1).map((item, index) => (
              <PhotoView key={index} src={item}>
                <img src={item} alt={`Hidden Gallery Item ${index + 1}`} />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
      <div className="m-10 grid grid-cols-1 space-y-6 lg:grid-cols-4 lg:space-y-0 ">
        <p className="col-span-2">
          <b className="text-xl lg:text-4xl">{podData.name}</b> from{' '}
          <b className="text-xl lg:text-4xl">{podInfo?.podPrice}</b> per night
        </p>

        <p className="lg:text-right space-x-5 col-span-2">
          <b className="text-xl lg:text-4xl">{podInfo?.numberOfPeople}</b>{' '}
          guests
          <b className="text-xl lg:text-4xl">{podInfo?.numberOfBeds}</b> bed
          <b className="text-xl lg:text-4xl">
            {podInfo?.numberOfBathrooms}
          </b>{' '}
          bath
          <b className="text-xl lg:text-4xl">{podInfo?.numberOfCouches}</b>{' '}
          living
          <span>
            <b className="text-xl lg:text-4xl">{podInfo?.podSize}</b>m
            <sup>2</sup>
          </span>
        </p>
      </div>

      <div className="m-10 text-justify max-w-8xl rounded overflow-hidden grid grid-cols-4 lg:space-y-0 space-y-10 lg:space-x-10">
        <p className="mt-4 col-span-4 lg:col-span-2 space-y-8">
          {podData.description}
        </p>
        <HoverEffect
          className="cursor-pointer col-span-4 lg:col-span-2"
          items={podData.features}
        />
      </div>
    </div>
  );
}

export function BentoGrid() {
  return (
    <Grid className="max-w-8xl mx-auto">
      {items.map((item, i) => (
        <GridItem
          key={i}
          image={item.image}
          className={
            i === 0
              ? 'lg:col-span-2 row-span-2'
              : i === 4 || i === 2
                ? 'lg:col-span-1 row-span-2'
                : 'lg:col-span-1 row-span-1'
          }
        />
      ))}
    </Grid>
  );
}

const items = [
  {
    image: theHideaway
  },
  {
    image: theHideaway2
  },
  {
    image: theHideaway3
  },
  {
    image: theHideaway4
  }
];

export default TheHideAway;
