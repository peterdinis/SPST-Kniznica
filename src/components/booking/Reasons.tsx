import { Typography } from "@mui/material";
import Mailto from "../shared/Mailto";

const Reasons: React.FC = () => {
  return (
    <div className="pl-4 mt-4">
      <Typography className="text-red-700 font-bold text-xl">
        Potencionálne problémy:
        <ul className="ml-4 mt-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Snažíte sa požičať knihu offline</li>
          <li>Zadali ste zle id knihy</li>
          <li>Zadali ste zlé používateľské meno</li>
          <li>Do dátum od alebo do ste zadali dátum z minulosti</li>
          <Mailto mailto="Ak to nebol žiaden z týchto problémov je to problém applikácie napíšte na:"  mailtoEmail="pdinis1@gmail.com"/>
        </ul>
      </Typography>
    </div>
  );
};

export default Reasons;
