import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

// `Content` receives children and renders them within a section
const Content: React.FC<ContentProps> = ({ children }) => {
  return <main className="m-1">{children}</main>;
};

export default Content;
