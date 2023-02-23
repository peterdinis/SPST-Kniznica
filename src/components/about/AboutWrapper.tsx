import Header from "../shared/Header";
import styles from "../../styles/Component.module.css";
import Paper from "@mui/material/Paper";

const AboutWrapper: React.FC = () => {
  return (
    <>
      <Header name="O Stránke" />
      <Paper elevation={3}>
        <h1 className={styles.ownerName}>Správca je ...</h1>
        <p className={styles.helperText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi et
          nesciunt sed excepturi quaerat, incidunt a architecto molestiae! Saepe
          iusto temporibus eaque voluptate officiis facere veniam amet
          praesentium id.
        </p>
      </Paper>
    </>
  );
};

export default AboutWrapper;
