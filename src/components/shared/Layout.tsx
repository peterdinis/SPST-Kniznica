import {ReactNode} from "react";
import Seo from "./Seo";
import Navbar from "./navbar/Navbar";
import { HelmetProvider } from "react-helmet-async";

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
    <HelmetProvider>
      <Seo />
      <Navbar />
      {children}
    </HelmetProvider>
  );
};

export default Layout;
