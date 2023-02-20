import Router from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: any) => {
  const WithAuth = (props: any) => {
    useEffect(() => {
      const studentEmail = localStorage.getItem("studentEmail");

      if (studentEmail === null || studentEmail === undefined) {
        Router.push("/notallowed");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithAuth.getInitialProps = async (ctx: any) => {
    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {};

    return { ...wrappedComponentInitialProps };
  };

  return WithAuth;
};

export default withAuth;
