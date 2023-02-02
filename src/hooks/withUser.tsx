import { NextComponentType } from "next";

function withAuth<T>(Component: NextComponentType<any>) {
  const Auth = (props: T) => {
    /* TODO: Update this later */
   /*  const { isLoggedIn } = props;
    if (!isLoggedIn) {
      return <Login />;
    }
    return <Component {...props} />; */
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;