import { The68CafePage } from './components';
import image1 from './images/681.webp';
import image2 from './images/682.webp';
import image3 from './images/683.webp';
import image4 from './images/684.webp';

export function The68Cafe() {
  return (
    <div className="min-h-screen py-10 w-full">
      <The68CafePage cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    content: '',
    className: 'md:col-span-1',
    thumbnail: image1
  },
  {
    id: 2,
    content: '',
    className: 'col-span-1',
    thumbnail: image2
  },
  {
    id: 3,
    content: '',
    className: 'col-span-1',
    thumbnail: image3
  },
  {
    id: 4,
    content: '',
    className: 'md:col-span-1',
    thumbnail: image4
  }
];
