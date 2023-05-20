import { Fragment } from "react";
import Header from "../shared/Header";
import Reasons from "./Reasons";

const FailedComponent: React.FC = () => {
    return (
        <Fragment>
            <Header name="Požičanie knihy zlyhalo" />
            <span className="pt-4">Možnosti prečo sa nepodarilo objednať knihu</span>
            <Reasons />
        </Fragment>
    )
}

export default FailedComponent;