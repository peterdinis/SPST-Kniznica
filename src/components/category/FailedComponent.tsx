import { Fragment } from "react";
import Header from "../shared/Header";
import Reasons from "./Reasons";

const FailedComponent: React.FC = () => {
    return (
        <Fragment>
            <Header name="Kategória sa nevytvorila" />
            <Reasons />
        </Fragment>
    )
}

export default FailedComponent;