import SubTitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';

import fire from './images/Fire.png';

import bed from './images/Bed.png';

import wood from './images/Wood.png';

const Local = () => {
  const imagesArray = [
    {
      title: 'Built Locally',
      description:
        'The materials used to build the lodges are sourced purely in the UK.',
      image: wood
    },
    {
      title: 'Comfort First',
      description: `Hit snooze. It's allowed. We pride ourselves on providing the most luscious linen for a well- deserved rest.`,
      image: bed
    },
    {
      title: 'Little Extras',
      description: `Our wide range of amenities set the scene for moments to remember.`,
      image: fire
    }
  ];
  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <Title className="text-4xl font-bold">LOCAL. SUSTAINABLE.</Title>
        <Title className="text-4xl font-bold">NESTLED IN NATURE</Title>

        <SubTitle className="mt-3 text-lg pr-5">
          Gaze out to view from the deck. Or burrow in the lodge with a good
          book. This is your retreat. And yours only. Make it what you want it
          to be.
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

export default Local;
