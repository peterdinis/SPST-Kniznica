import { Helmet as HelmetComponent } from "react-helmet-async";

interface IHelmetProps {
  children?: React.ReactNode;
}

const Helmet: React.FC<IHelmetProps> = ({ children }: IHelmetProps) => {
  return (
      <HelmetComponent>
        {/* TODO: Update img-src media-src */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
                      default-src 'self';
                      script-src 'self';
                      img-src https://*.my-s3-endpoint.com;
                      media-src https://*.my-s3-endpoint.com;
                `}
        ></meta>
        {children}
      </HelmetComponent>
  );
};

export default Helmet;
