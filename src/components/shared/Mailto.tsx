import Link from "next/link"

interface IMailtoProps {
  mailto: string;
  mailtoEmail: string;
}

export default function Mailto({ mailto, mailtoEmail }: IMailtoProps) {
  return (
    <li>
      {mailto} na: <Link className="text-red-700" href="pdinis1@gmail.com">{mailtoEmail}</Link>
    </li>
  );
}
