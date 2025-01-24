import { ReactNode } from 'react';
import { CountryGlampingNavBar } from '../NavBar';
import { Footer } from '../Footer';
import Content from '../Content';

// Define Layout Props Type
interface LayoutProps {
  children: ReactNode; // Typing for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CountryGlampingNavBar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
