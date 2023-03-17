import Header from "../shared/Header";
import { toast } from "react-toastify";


const notify = () => toast.success("Kniha bola vytvorená");
const errorRegister = () => toast.error("Kniha nebola vytvorená");


const CreateBookForm: React.FC = () => {
  return (
    <>
      <Header name="Vytvorenie novej knihy" />
      prrprp
    </>
  );
};

export default CreateBookForm;
