import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAdmin from "@/hooks/useAdmin";
import useTeacher from '@/hooks/useTeacher';

const PrivateRoute = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const AuthenticatedRoute: React.FC<T> = (props) => {
    const router = useRouter();
    const teacher = useTeacher();
    const admin = useAdmin();

    const isLoggedIn = teacher !== null && teacher !== undefined || admin !== null && admin !== undefined;

    useEffect(() => {
      // Redirect to login if the user is not authenticated
      if (!isLoggedIn) {
        router.push('/forbidden');
      }
    }, []);

    // Render the component only if the user is authenticated
    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedRoute;
};

export default PrivateRoute;