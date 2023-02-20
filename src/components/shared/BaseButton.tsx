import { useFn } from "../../hooks/useFn";
import styles from "../../styles/Component.module.css";

interface IProps {
  name: string;
}

function BaseButton({ name }: IProps) {
  const fn = useFn();
  return (
    <button className={styles.baseBtn} onClick={fn}>
      {name}
    </button>
  );
}

export default BaseButton;
