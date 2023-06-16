import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';

const PrivateRoute = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return (props: T) => {
    const router = useRouter();

    useEffect(() => {
      const teacherCookie = Cookies.get("teacherPersonalInfo");
      const adminCookie = Cookies.get("adminPersonalData");

      if (!teacherCookie && !adminCookie) {
        router.push('/forbidden');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default PrivateRoute;