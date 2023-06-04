import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAdmin from "@/hooks/useAdmin";
import useTeacher from '@/hooks/useTeacher';

const PrivateRoute = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const AuthenticatedRoute: React.FC<T> = (props) => {
    const router = useRouter();
    const teacher = useTeacher();
    const admin = useAdmin();

    const checkIfIsTeacherOrAdmin = !teacher || !admin;

    console.log(teacher);
    console.log(admin);

    useEffect(() => {
      // Redirect to login if the user is not authenticated
      if (!checkIfIsTeacherOrAdmin) {
        router.push('/forbidden');
      }
    }, []);

    // Render the component only if the user is authenticated
    return checkIfIsTeacherOrAdmin ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedRoute;
};

export default PrivateRoute;