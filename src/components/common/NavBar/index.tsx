import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { motion } from 'framer-motion';
import countryGlamping from '@/assets/images/countryGlamping.webp';
import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { CaretDownIcon, CaretRightIcon } from '@radix-ui/react-icons';
// import { NavLink } from "react-router-dom";

const components: { title: string; href: string }[] = [
  {
    title: 'The Cosy',
    href: '/the-cosy'
  },
  {
    title: 'The Family',
    href: '/the-family'
  },
  {
    title: 'The Hideaway',
    href: '/the-hideaway'
  }
];

export function CountryGlampingNavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const goToBookingWebsite = (url: string) => {
    window.location.href = url; // Navigate to the URL in the same window
  };
  return (
    <NavigationMenu className="sticky top-0 z-50 mt-0 mr-2 ml-2 rounded-tr-none rounded-tl-none rounded-br-lg rounded-bl-lg shadow-lg bg-[#D3d9d4] p-5 max-w-full lg:min-w-max lg:max-w-full lg:m-1 lg:mt-0 lg:p-2">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto ">
        <Link to="/">
          <img
            loading="lazy"
            className="h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] lg:h-[6rem] lg:w-[6rem] p-1 cursor-pointer hover:scale-[102%] transition-all"
            src={countryGlamping}
            alt="Country Glamping"
          />
        </Link>

        {/* Desktop Navigation List */}
        <NavigationMenuList className="hidden md:flex md:space-x-2 lg:space-x-6 w-full justify-center">
          <NavigationMenuItem className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navigationMenuTriggerStyle()} ${isActive ? 'text-slate-900 font-extrabold' : 'text-black font-extrabold'}`
              }
            >
              Home
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <NavLink
              to="/our-story"
              className={({ isActive }) =>
                `${navigationMenuTriggerStyle()} ${isActive ? 'text-slate-900 font-extrabold' : 'text-black font-extrabold'}`
              }
            >
              Our Story
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer text-lg text-gray-700">
            <NavigationMenuTrigger>Pods</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[320px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[200px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `${navigationMenuTriggerStyle()} ${isActive ? 'text-slate-900' : 'text-black'}`
              }
            >
              Contact Us
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer">
            <NavLink
              to="/the-68-cafe"
              className={({ isActive }) =>
                `${navigationMenuTriggerStyle()} ${isActive ? 'text-slate-900' : 'text-black'}`
              }
            >
              The 68 Café
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer">
            <NavLink
              to="/digital-detox"
              className={({ isActive }) =>
                `${navigationMenuTriggerStyle()} ${isActive ? 'text-slate-900' : 'text-black'}`
              }
            >
              Digital Detox
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuItem className="hidden md:flex md:space-x-2 lg:space-x-6 w-auto justify-end cursor-pointer list-none">
          <Button
            className="text-xs"
            onClick={() =>
              goToBookingWebsite(
                'https://direct-book.com/properties/countryglamping'
              )
            }
          >
            Book now
          </Button>
        </NavigationMenuItem>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobileMenuOpen ? (
              <motion.svg
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            ) : (
              <motion.svg
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: -180 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="absolute top-[6.5rem] left-0 w-full bg-white shadow-lg p-4 md:hidden">
            <NavigationMenuList className="flex flex-col space-y-4">
              <NavigationMenuItem className="cursor-pointer">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${navigationMenuTriggerStyle()} ${isActive ? 'text-slate-900' : 'text-black'}`
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="cursor-pointer">
                <NavLink
                  to="/our-story"
                  className={({ isActive }) =>
                    `${navigationMenuTriggerStyle()} ${isActive ? 'text-slate-900' : 'text-black'}`
                  }
                >
                  Our Story
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="cursor-pointer">
                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-center space-x-2 px-2">
                    <NavigationMenuLink className="text-lg text-gray-700 hover:text-gray-900">
                      Pods
                    </NavigationMenuLink>
                    <CollapsibleTrigger>
                      {isOpen ? (
                        <CaretDownIcon className="h-4 w-4" />
                      ) : (
                        <CaretRightIcon className="h-4 w-4" />
                      )}
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="space-y-2">
                    <ul className="grid gap-2 p-2">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          to={component.href}
                        ></ListItem>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </NavigationMenuItem>

              <NavigationMenuItem className="cursor-pointer">
                <NavLink
                  to="/contact-us"
                  className="text-lg text-gray-700 hover:text-gray-900"
                >
                  Contact Us
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="cursor-pointer">
                <NavLink
                  to="/the-68-cafe"
                  className="text-lg text-gray-700 hover:text-gray-900"
                >
                  The 68 Café
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="cursor-pointer">
                <NavLink
                  to="/digital-detox"
                  className="text-lg text-gray-700 hover:text-gray-900"
                >
                  Digital Detox
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex cursor-pointer list-none">
                <Button
                  className="text-xs"
                  onClick={() =>
                    goToBookingWebsite('https://direct-book.com/properties/countryglamping')
                  }
                >
                  Book now
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        )}
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  { title: string; to: string } & React.ComponentPropsWithoutRef<'a'>
>(({ className, title, to, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          to={to}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-700">
            {title}
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
              {children}
            </p>
          )}
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
