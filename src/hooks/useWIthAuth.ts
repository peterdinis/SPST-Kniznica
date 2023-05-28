import { useEffect, useState } from 'react';
import Router from 'next/router';

const spotify = new SpotifyWebApi();

const withAuth = (WrappedComponent: any) => {
    const WithAuth = (props: any) => {
        const [loading, setLoading] = useState(true);
        const [token, setToken] = useState(null);
    
        useEffect(() => {
            const hash = getTokenFromUrl();
            window.location.hash = "";
            const _token = hash.accessToken;

            if(_token) {
                setToken(_token);
                spotify.setAccessToken(_token);

                spotify.getMe().then((user: any) => {
                    console.log("Ping work", user);
                })
            }

            setLoading(false);
        }, []);
    
        if (loading) {
            return <div>Loading...</div>;
        }
    
        if (!token) {
            Router.push('/login');
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