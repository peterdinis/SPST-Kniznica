import { NextComponentType } from "next";

function withAuth<T>(Component: NextComponentType<T>) {
  const Auth = (props: T) => {
    const { isLoggedIn } = props;
    if (!isLoggedIn) {
      return <Login />;
    }
    return <Component {...props} />;
  };
  
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;