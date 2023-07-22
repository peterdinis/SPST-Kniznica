import { Navbar, Seo } from ".";
import { ReactNode } from "react";


interface ILayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
      <>
      <Seo />
      <Navbar />
      {children}
      </>
  );
};

export default Layout;
