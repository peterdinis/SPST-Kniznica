import { Reasons } from ".";
import { Header } from "../shared";

const FailedComponent: React.FC = () => {
    return (
        <>
            <Header name="Vytvorenie spistovateľa zlyhalo"/> 
            <Reasons />
        </>
    )
}

export default FailedComponent;