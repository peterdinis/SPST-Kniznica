import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAdmin from "@/hooks/useAdmin";
import useTeacher from '@/hooks/useTeacher';

const PrivateRoute = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const AuthenticatedRoute: React.FC<T> = (props) => {
    const router = useRouter();
    const teacher = useTeacher();
    const admin = useAdmin();

    // Simulate authentication check
    const isAuthenticated = true; // Replace with your authentication logic

    useEffect(() => {
      // Redirect to login if the user is not authenticated
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, []);

    // Render the component only if the user is authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedRoute;
};

export default PrivateRoute;