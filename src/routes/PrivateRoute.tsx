import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  return (props: T) => {
    const router = useRouter();

    useEffect(() => {
      // Check if the cookie exists in session storage
      const teacherCookie = Cookies.get("teacherPersonalInfo");
      const adminCookie = Cookies.get("adminPersonalData");

      if (!teacherCookie || !adminCookie) {
        // Redirect the user to /forbidden
        router.push('/forbidden');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default PrivateRoute;