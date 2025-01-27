// import { Button } from '@/components/ui/button';
import theCosy from './TheCosyMain.jpg';
import theCosy2 from '../../features/Home/components/ThreePods/CarouselImages/C1-6.jpg';

import theCosy3 from '../../features/Home/components/ThreePods/CarouselImages/C1-4.jpg';

import theCosy4 from '../../features/Home/components/ThreePods/CarouselImages/C1-7.jpg';
import { podsData } from '@/lib/data';
import { HoverEffect } from '@/components/common/CardHover';
import { Grid, GridItem } from '@/components/common/Grid';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import C2_1 from '../Home/components/ThreePods/CarouselImages/C2-1.jpg';
import C2_2 from '../Home/components/ThreePods/CarouselImages/C2-2.jpg';
import C2_3 from '../Home/components/ThreePods/CarouselImages/C2-3.jpg';
import C2_4 from '../Home/components/ThreePods/CarouselImages/C2-4.jpg';
import C2_5 from '../Home/components/ThreePods/CarouselImages/C2-5.jpg';
import C2_6 from '../Home/components/ThreePods/CarouselImages/C2-6.jpg';
import C2_7 from '../Home/components/ThreePods/CarouselImages/C2-7.jpg';
import C2_8 from '../Home/components/ThreePods/CarouselImages/C2-8.jpg';
import C2_9 from '../Home/components/ThreePods/CarouselImages/C2-9.jpg';
import C2_10 from '../Home/components/ThreePods/CarouselImages/C2-10.jpg';
import C2_11 from '../Home/components/ThreePods/CarouselImages/C2-11.jpg';
import C2_12 from '../Home/components/ThreePods/CarouselImages/C2-12.jpg';
import { Button } from '@/components/ui/button';

export function TheCosy() {
  const podData = podsData.find((pod) => pod.name === 'The Cosy');
  if (!podData) return <div>Pod data not found</div>;
  const { podInfo } = podData;

  const images = [
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
  ];

  return (
    <div className="w-full h-auto max-w-7xl mx-auto">
      <div className="mx-10 mt-10 max-w-7xl rounded overflow-hidden hidden lg:flex lg:justify-center lg:items-center">
        <BentoGrid />
      </div>

      <div className="m-10 max-w-8xl rounded overflow-hidden flex lg:hidden">
        <img src={theCosy} />
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
        <div className="mt-4 col-span-4 lg:col-span-2 space-y-8">
          {podData.description}
        </div>
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
    image: theCosy
  },
  {
    image: theCosy2
  },
  {
    image: theCosy3
  },
  {
    image: theCosy4
  }
];

export default TheCosy;
