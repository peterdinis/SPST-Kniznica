import Router from 'next/router';

const withAuth = (WrappedComponent: any) => {
    const WithAuth = (props: any) => {

        const teacherEmail = localStorage.getItem('teacherEmail')
    
        if (teacherEmail === null || teacherEmail === undefined || !teacherEmail) {
            Router.push('/notallowed');
            return null;
        }
    
        return <WrappedComponent {...props} />;
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