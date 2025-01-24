import { Link } from 'react-router-dom';
import insta1 from './images/Insta1.webp';
import insta2 from './images/Insta2.webp';

import insta3 from './images/Insta3.jpeg';
import insta4 from './images/Insta4.jpg';
import insta5 from './images/Insta5.jpeg';
const InstagramPictures = () => {
  const imagesArray = [
    { link: 'https://www.instagram.com/p/Ch9mWO_o6aQ/', image: insta1 },
    { link: 'https://www.instagram.com/p/Ch9mEWRIniH/', image: insta2 },
    { link: 'https://www.instagram.com/p/Ch9l9LPoyup/', image: insta3 },
    { link: 'https://www.instagram.com/p/ChXcDSKjPJT/', image: insta4 },
    { link: 'https://www.instagram.com/p/ChXb7GmD23t/', image: insta5 }
  ];
  return (
    <div className="mt-[5rem] mb-[5rem] px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {imagesArray.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <img
                className={`${index === 0 || index === 2 || index === 4 ? 'object-contain' : 'object-cover'} w-full h-[20rem] lg:h-full rounded-2xl hover:scale-[101%] transition-all hover:cursor-pointer`}
                src={item.image}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramPictures;
