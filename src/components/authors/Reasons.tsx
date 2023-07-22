import { Typography } from "@mui/material";
import Link from "next/link";
import { Mailto } from "../shared";

const Reasons: React.FC = () => {
  return (
    <div className="pl-4 mt-4">
      <Typography className="text-red-700 font-bold text-xl">
        Potencionálne problémy:
        <ul className="ml-4 mt-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Nevplnili ste všetky atribúty</li>
          <Mailto mailto="Ak to nebol žiaden z týchto problémov je to problém applikácie napíšte na:"  mailtoEmail="pdinis1@gmail.com"/>
        </ul>
      </Typography>
      <Link href="/">Návrat na domovskú stránku</Link>
    </div>
  );
};

export default Reasons;
