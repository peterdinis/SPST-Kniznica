import {ReactNode} from "react";
import withAuth from "./ProtectedComponent";

interface IProps {
    children?: ReactNode;
}

const ProtectedRoute = ({children}: IProps) => {
    return (
        <>
            {children}
        </>
    )
  };
  
  export default withAuth(ProtectedRoute);