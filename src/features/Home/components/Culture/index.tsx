import SubTitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';

import pup from './images/Pup.webp';

import typewriter from './images/Type.webp';

import cafe from './images/Cafe.webp';

const Culture = () => {
  const imagesArray = [
    {
      title: 'Pup Friendly',
      description: `Four legged friends shouldn't be left behind. If it's good for you it's good for them too!`,
      image: pup
    },
    {
      title: 'Digital Detox',
      description: `Need to make the most of the country air? Book our Digital Detox Experience and step away from tech pressures.`,
      image: typewriter
    },
    {
      title: 'The 68 Café',
      description: `Organic. Local. Environmentally-conscious café for breakfast, lunch, dinner - and everything in between.`,
      image: cafe
    }
  ];
  return (
    <div className="mt-20">
      <div className="mb-10">
        <Title className="text-4xl font-bold text-center">
          NOT JUST GLAMPING.
        </Title>
        <Title className="text-4xl font-bold text-center">
          BUT A CULTURE. A COMMUNITY.
        </Title>

        <SubTitle className="mt-3 text-lg  pr-5 text-center ml-auto">
          Closer to nature. Closer to peace. We bring you activities and service
          to make the most of your break away from urbanity. From digital
          detoxes to health-inspired menus, nature is in our DNA.
        </SubTitle>
      </div>
      <div className="px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagesArray.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col h-full justify-between" // Ensures content stays within
              >
                <img
                  className="w-full h-[20rem] lg:h-full object-cover rounded-2xl hover:scale-[101%] transition-all hover:cursor-pointer"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col justify-between mt-4 text-center">
                  {' '}
                  {/* Added padding to container */}
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="mt-3  text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Culture;
