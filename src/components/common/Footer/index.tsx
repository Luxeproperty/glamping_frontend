import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import countryGlampingFooter from '@/assets/images/footer.webp';
import { NavLink } from 'react-router-dom';
import termsAndCondition from './terms-and-conditions.pdf';
import privacyPolicy from './privacy-policy.pdf';

export function Footer() {
  const footerInfoLinks: any = [
    {
      title: 'Book now',
      link: 'https://direct-book.com/properties/countryglamping',
      target: '_blank'
    },
    {
      title: 'Terms & Services',
      link: termsAndCondition,
      target: '_blank'
    },
    {
      title: 'Privacy Policy',
      link: privacyPolicy,
      target: '_blank'
    }
  ];
  return (
    <footer className="bottom-0 z-20 p-2 w-full bg-[#2B3821]">
      <div className="p-4 flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <img
          loading="lazy"
          className="h-[6rem] w-[6rem] md:h-[6rem] md:w-[6rem] p-1 cursor-pointer hover:opacity-65 mb-4 lg:mb-0"
          src={countryGlampingFooter}
          alt="Country Glamping"
        />

        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-col md:flex-row md:space-x-2 lg:space-x-6 w-full justify-center items-center">
            {footerInfoLinks.map((item: any, idx: number) => (
              <NavigationMenuItem key={idx} className="cursor-pointer">
                <NavLink
                  target={item.target}
                  rel={
                    item.target === '_blank' ? 'noopener noreferrer' : undefined
                  }
                  to={item.link}
                  className={({ isActive }) =>
                    `${navigationMenuTriggerStyle()} ${
                      isActive ? 'text-slate-400' : 'text-white'
                    } text-center`
                  }
                >
                  {item.title}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <span className="mt-4 lg:mt-0">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12.0001"
              r="4.44444"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6.0217V6"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </footer>
  );
}
