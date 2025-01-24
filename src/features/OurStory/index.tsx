import samIbgiPicture from './Sam-Ibgi.webp';

const OurStory = () => {
  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto">
      <div className="py-10 flex flex-col lg:flex-row m-5 mb-10 overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative mb-5 lg:mb-0">
          <img
            src={samIbgiPicture}
            alt="Sam Ibgi"
            className="h-96 object-contain lg:h-full w-full lg:object-cover rounded-2xl"
          />

          <div className="absolute inset-x-0 bottom-0 text-center">
            <div className="bg-black bg-opacity-50 backdrop-blur-md p-5 rounded-lg inline-block">
              <p className="text-white text-sm lg:text-xl italic">
                "We were looking to build an experience that leads guests closer
                to nature without compromising on the aspect of finding luxury
                in the wilderness"
              </p>
              <p className="text-white text-xs lg:text-md mt-2">
                - Sam Ibgi, Founder
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 h-auto px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Our Story
            </h1>
          </div>

          <div className="text-center">
            <p className="text-base lg:text-base mb-2">
              Long gone are the days of fast-paced itineraries, cramming as much
              as possible in between city-break flights. Cut to 2022, and
              Founder Sam Ibgi opened his wellbeing haven in the heart of County
              Durham. Here is his story.
            </p>
          </div>

          <p className="text-lg lg:text-lg p-2 lg:p-3">
            Starting in property and construction himself in 2004, Mr Ibgi
            established himself in the world of property development and
            management by having created Luxe Property Group.
          </p>
          <p className="text-lg lg:text-lg p-2 lg:p-3">
            In 2016, Sam pursued an interest in hospitality and consequently
            launched the brand of ApartHotels and Villas named Buckingham &
            Lloyds. With the thriving aparthotel brand, Sam decided to venture
            north and embrace slow travel involving nature and a more local
            angle. Sam prides himself on having eliminated single-use plastic
            across previous hospitality residences and focused on educating the
            younger generations on how to conserve our planet.
          </p>
          <p className="text-lg lg:text-lg p-2 lg:p-3">
            In 2018 he proceeded to purchase a hotel in a Polish ski resort,
            converting it into 34 apartments, which he sold to private buyers.
            He has also acquired a freehold comprising 19 apartments, 3 offices,
            and a restaurant. Mr. Ibgi is active in Poland and will be looking
            to lease the properties to Buckingham & Lloyds for the use of
            ApartHotels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
