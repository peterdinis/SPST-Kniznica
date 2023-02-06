import {signIn} from "next-auth/react";
import GoogleIcon from '@mui/icons-material/Google';

const GoogleButton: React.FC = () => {
    return (
        <button className="bg-white p-2 rounded-lg" onClick={() => signIn()}>
            <GoogleIcon /> Sign In with google
        </button>
    )
}

export default GoogleButton