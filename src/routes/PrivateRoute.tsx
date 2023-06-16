import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the cookie exists in session storage
    const cookie = sessionStorage.getItem('cookieName'); // Replace 'cookieName' with the actual name of your cookie

    if (!cookie) {
      // Redirect the user to /forbidden
      router.push('/forbidden');
    }
  }, []);

  return WrappedComponent;
};

export default PrivateRoute;