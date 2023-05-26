import { Typography } from "@mui/material";
import Mailto from "../shared/Mailto";

const Reasons: React.FC = () => {
  return (
    <div>
      <Typography className="text-red-700 font-bold text-xl">
        Potencionálne problémy:
        <ul className="ml-4 mt-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <Mailto mailto="Ak to nebol žiaden z týchto problémov je to problém applikácie napíšte na:"  mailtoEmail="pdinis1@gmail.com"/>
        </ul>
      </Typography>
    </div>
  );
};

export default Reasons;
