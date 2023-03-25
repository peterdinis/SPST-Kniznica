import { HelperHeader } from "@/styles/Component.styled";

interface Props {
  name: string;
}

function Header({ name }: Props) {
  return <HelperHeader>{name}</HelperHeader>;
}

export default Header;
