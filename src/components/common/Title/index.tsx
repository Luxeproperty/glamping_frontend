import { ReactNode } from 'react';

interface TitleProps {
  className: string;
  children: ReactNode;
}

// `Content` receives children and renders them within a section
const Title: React.FC<TitleProps> = ({ className, children }) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export default Title;
