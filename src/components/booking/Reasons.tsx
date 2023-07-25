import Mailto from "../shared/Mailto";
import Link from "next/link";
import {Text} from "@chakra-ui/react"

const Reasons: React.FC = () => {
  return (
    <div className="pl-4 mt-4">
      <Text className="text-red-700 font-bold text-xl">
        Potencionálne problémy:
        <ul className="ml-4 mt-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Snažíte sa požičať knihu offline</li>
          <li>Zadali ste zle id knihy</li>
          <li>Zadali ste zlé používateľské meno</li>
          <li>Do dátum od alebo do ste zadali dátum z minulosti</li>
          <Mailto mailto="Ak to nebol žiaden z týchto problémov je to problém applikácie napíšte na:"  mailtoEmail="pdinis1@gmail.com"/>
        </ul>
      </Text>
      <Link href="/">Návrat na domovskú stránku</Link>
    </div>
  );
};

export default Reasons;
