import { FaCouch } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { IoBedSharp } from 'react-icons/io5';
import { GiSleepingBag, GiDeskLamp, GiShower } from 'react-icons/gi';
import { GrBike } from 'react-icons/gr';
import {
  MdBrunchDining,
  MdDeck,
  MdOutlineMediaBluetoothOn
} from 'react-icons/md';
import { TbParkingCircleFilled } from 'react-icons/tb';
import { PiOvenBold } from 'react-icons/pi';
export interface PodInfo {
  numberOfPeople: string;
  numberOfBeds: string;
  numberOfCouches: string;
  numberOfBathrooms: string;
  podSize: string;
  podPrice: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
}

export interface Pod {
  name: string;
  description?: React.ReactNode;
  podInfo?: PodInfo;
  features?: Feature[];
}

export const podsData: Pod[] = [
  {
    name: 'The Cosy',
    description: (
      <>
        <p>
          Situated in the heart of County Durham, our brand-new luxurious
          glamping site is ideally located on the doorstep of the Durham Dales,
          making it the perfect place to explore the rolling countryside. County
          Durham is home to castles, UNESCO heritage sites, refined dining
          destinations, and endless forest trails.
        </p>
        <p>
          Our fully furnished pods have been custom-built with your comfort in
          mind. Each pod features a fully equipped kitchen, a bathroom with a
          walk-in shower, hot water on demand, and a super comfy bed dressed
          with the highest quality linen. The pods are fully insulated and have
          central heating for those frosty winter nights when you can snuggle up
          amongst the cozy cushions and throws provided.
        </p>
        <p>
          Smart TVs are available in the lounge areas and bedrooms, so you can
          bring along your streaming account details and relax watching your
          favorite shows. We provide all bedding, towels, robes, blankets,
          throws, crockery, cutlery, glasses, cups, and cooking utensils.
        </p>
        <p>
          You need only bring yourselves for the ultimate glamping experience!
          In addition, our site offers private parking for all pods, accessed by
          an electronic barrier for guests' use only. Each pod also includes
          secure bike storage for up to two bikes. Planning a picnic? Prep
          everything in your private kitchen or simply head to The 68 Cafe for a
          homely brunch or a slice of homemade cake.
        </p>
      </>
    ),
    podInfo: {
      numberOfPeople: '4',
      numberOfBeds: '1',
      numberOfCouches: '1',
      numberOfBathrooms: '1',
      podSize: '30',
      podPrice: '£100'
    },
    features: [
      {
        icon: FaCouch,
        title: `A lounge and dining area with sofa bed, dining table and chairs, smart Tvs with internet connection.`
      },
      {
        icon: FaKitchenSet,
        title: `Fully fitted kitchen with fridge, oven, toaster, kettle, crockery, cutlery, glasses, cups and cooking utensils.`
      },
      {
        icon: IoBedSharp,
        title: `All pods equipped with all bedding, towels, robes, blankets and throws.`
      },
      {
        icon: GiSleepingBag,
        title: `Throws, blankets and cushions.`
      },
      {
        icon: FaCouch,
        title: `Central heating and hot water.`
      },
      {
        icon: GiDeskLamp,
        title: `Lamps and reading lights.`
      },
      {
        icon: GiShower,
        title: `Bathroom with walk-in shower, toilet, hand basin and towel radiator.`
      },
      {
        icon: GrBike,
        title: `Secure bike storage for two bikes outside each pod.`
      },
      {
        icon: MdDeck,
        title: `Private decking with outside furniture.`
      },
      {
        icon: TbParkingCircleFilled,
        title: `Private parking accessed through electronic barrier, accessible for guests only.`
      }
    ]
  },
  {
    name: 'The Family',
    description: (
      <>
        <p>
          Situated in the heart of County Durham, our brand-new luxurious
          glamping site is ideally located on the doorstep of the Durham Dales,
          making it the perfect place to explore the rolling countryside. County
          Durham is home to castles, UNESCO heritage sites, refined dining
          destinations, and endless forest trails.
        </p>
        <p>
          Our fully furnished pods have been custom-built with your comfort in
          mind. Each pod features a fully equipped kitchen, a bathroom with a
          walk-in shower, hot water on demand, and a super comfy bed dressed
          with the highest quality linen. The pods are fully insulated and have
          central heating for those frosty winter nights when you can snuggle up
          amongst the cozy cushions and throws provided.
        </p>
        <p>
          Smart TVs are available in the lounge areas and bedrooms, so you can
          bring along your streaming account details and relax watching your
          favorite shows. We provide all bedding, towels, robes, blankets,
          throws, crockery, cutlery, glasses, cups, and cooking utensils.
        </p>
        <p>
          You need only bring yourselves for the ultimate glamping experience!
          In addition, our site offers private parking for all pods, accessed by
          an electronic barrier for guests' use only. Each pod also includes
          secure bike storage for up to two bikes. Planning a picnic? Prep
          everything in your private kitchen or simply head to The 68 Cafe for a
          homely brunch or a slice of homemade cake.
        </p>
      </>
    ),
    podInfo: {
      numberOfPeople: '4',
      numberOfBeds: '1',
      numberOfCouches: '1',
      numberOfBathrooms: '1',
      podSize: '30',
      podPrice: '£100'
    },
    features: [
      {
        icon: FaCouch,
        title: `A lounge and dining area with sofa bed, dining table and chairs, smart Tvs with internet connection.`
      },
      {
        icon: FaKitchenSet,
        title: `Fully fitted kitchen with fridge, oven, toaster, kettle, crockery, cutlery, glasses, cups and cooking utensils.`
      },
      {
        icon: IoBedSharp,
        title: `All pods equipped with all bedding, towels, robes, blankets and throws.`
      },
      {
        icon: GiSleepingBag,
        title: `Throws, blankets and cushions.`
      },
      {
        icon: FaCouch,
        title: `Central heating and hot water.`
      },
      {
        icon: GiDeskLamp,
        title: `Lamps and reading lights.`
      },
      {
        icon: GiShower,
        title: `Bathroom with walk-in shower, toilet, hand basin and towel radiator.`
      },
      {
        icon: GrBike,
        title: `Secure bike storage for two bikes outside each pod.`
      },
      {
        icon: MdDeck,
        title: `Private decking with outside furniture.`
      },
      {
        icon: TbParkingCircleFilled,
        title: `Private parking accessed through electronic barrier, accessible for guests only.`
      }
    ]
  },
  {
    name: 'The Hideaway',
    description: (
      <>
        <p>
          Situated in the heart of County Durham, our brand-new luxurious
          glamping site is ideally located on the doorstep of the Durham Dales,
          making it the perfect place to explore the rolling countryside. County
          Durham is home to castles, UNESCO heritage sites, refined dining
          destinations, and endless forest trails.
        </p>
        <p>
          Our fully furnished pods have been custom-built with your comfort in
          mind. Each pod features a fully equipped kitchen, a bathroom with a
          walk-in shower, hot water on demand, and a super comfy bed dressed
          with the highest quality linen. The pods are fully insulated and have
          central heating for those frosty winter nights when you can snuggle up
          amongst the cozy cushions and throws provided.
        </p>
        <p>
          Smart TVs are available in the lounge areas and bedrooms, so you can
          bring along your streaming account details and relax watching your
          favorite shows. We provide all bedding, towels, robes, blankets,
          throws, crockery, cutlery, glasses, cups, and cooking utensils.
        </p>
        <p>
          You need only bring yourselves for the ultimate glamping experience!
          In addition, our site offers private parking for all pods, accessed by
          an electronic barrier for guests' use only. Each pod also includes
          secure bike storage for up to two bikes. Planning a picnic? Prep
          everything in your private kitchen or simply head to The 68 Cafe for a
          homely brunch or a slice of homemade cake.
        </p>
      </>
    ),
    podInfo: {
      numberOfPeople: '4',
      numberOfBeds: '1',
      numberOfCouches: '1',
      numberOfBathrooms: '1',
      podSize: '30',
      podPrice: '£100'
    },
    features: [
      {
        icon: FaCouch,
        title: `A lounge and dining area with sofa bed, dining table and chairs, smart Tvs with internet connection.`
      },
      {
        icon: FaKitchenSet,
        title: `Fully fitted kitchen with fridge, oven, toaster, kettle, crockery, cutlery, glasses, cups and cooking utensils.`
      },
      {
        icon: IoBedSharp,
        title: `All pods equipped with all bedding, towels, robes, blankets and throws.`
      },
      {
        icon: GiSleepingBag,
        title: `Throws, blankets and cushions.`
      },
      {
        icon: FaCouch,
        title: `Central heating and hot water.`
      },
      {
        icon: GiDeskLamp,
        title: `Lamps and reading lights.`
      },
      {
        icon: GiShower,
        title: `Bathroom with walk-in shower, toilet, hand basin and towel radiator.`
      },
      {
        icon: GrBike,
        title: `Secure bike storage for two bikes outside each pod.`
      },
      {
        icon: MdDeck,
        title: `Private decking with outside furniture.`
      },
      {
        icon: TbParkingCircleFilled,
        title: `Private parking accessed through electronic barrier, accessible for guests only.`
      },
      {
        icon: MdBrunchDining,
        title: `Larger lounge area with sofa bed and dining area.`
      },
      {
        icon: MdOutlineMediaBluetoothOn,
        title: `Integrated bluetooth speakers.`
      },
      {
        icon: PiOvenBold,
        title: `Dishwasher`
      }
    ]
  }
];
