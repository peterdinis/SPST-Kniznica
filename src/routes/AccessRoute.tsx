import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';

const AccessRoute = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return (props: T) => {
    const router = useRouter();

    useEffect(() => {
      const studentCookie = Cookies.get("studentPersonalData");

      if (!studentCookie) {
        router.push('/forbidden');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default AccessRoute;