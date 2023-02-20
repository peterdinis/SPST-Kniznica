import Router from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: any) => {
  const WithAuth = (props: any) => {
    const studentEmail = localStorage.getItem("studentEmail");
    console.log(studentEmail);
    useEffect(() => {
      if (studentEmail) {
        console.log(studentEmail);
        Router.push("/student/profile");
      } else {
        Router.push("/notallowed");
      }
    }, [studentEmail]);

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
