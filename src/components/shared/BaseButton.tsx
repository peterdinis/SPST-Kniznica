import { useFn } from "../../hooks/useFn";
import { BaseButtonStyled } from "@/styles/Component.styled";

interface IProps {
  name: string;
}

function BaseButton({ name }: IProps) {
  const fn = useFn();
  return (
    <BaseButtonStyled onClick={fn}>
      {name}
    </BaseButtonStyled>
  );
}

export default BaseButton;
