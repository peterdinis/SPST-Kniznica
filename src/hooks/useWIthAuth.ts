import { useRouter } from 'next/router';
import useTeacher from './useTeacher';
import useAdmin from './useAdmin';

const withAuth = (WrappedComponent: any) => {
    const router = useRouter();
    const WithAuth = (props: any) => {
        const {teacher} = useTeacher();
        const {admin} = useAdmin();
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