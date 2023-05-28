import {Fragment, ReactNode} from "react";
import withAuth from "../../hooks/useWithAuth";

interface IProps {
    children?: ReactNode;
}

const ProtectedRoute = ({children}: IProps) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
  };
  
  export default withAuth(ProtectedRoute);