import EmblaCarousel from './components/Carousel/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import ThreePods from './components/ThreePods';
import ChillZone from './components/ChillZone';
import Local from './components/Local';
import Culture from './components/Culture';
import InstagramPictures from '@/components/common/InstagramPictures';

const Home = () => {
  const OPTIONS: EmblaOptionsType = { loop: true, duration: 40 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT));

  return (
    <div className="w-full h-auto max-w-7xl mx-auto">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <ThreePods options={OPTIONS} />
      <ChillZone options={OPTIONS} />
      <Local />
      <Culture />
      <InstagramPictures />
    </div>
  );
};

export default Home;
