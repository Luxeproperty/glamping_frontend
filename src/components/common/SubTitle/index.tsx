import { ReactNode } from 'react';

interface SubTitleProps {
  className: string;
  children: ReactNode;
}

// `Content` receives children and renders them within a section
const SubTitle: React.FC<SubTitleProps> = ({ className, children }) => {
  return <h4 className={`${className}`}>{children}</h4>;
};

export default SubTitle;
