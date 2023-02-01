import styles from "../../styles/Component.module.css";

interface Props {
  name: string;
}

function Header({ name }: Props) {
  return <h1 className={styles.header}>{name}</h1>;
}

export default Header;
