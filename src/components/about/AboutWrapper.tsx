import Header from "../shared/Header";
import Paper from "@mui/material/Paper";
import { HelperText, OwnerName } from "@/styles/Component.styled";

const AboutWrapper: React.FC = () => {
  return (
    <>
      <Header name="O Stránke" />
      <Paper elevation={3}>
        <OwnerName>Správca je Mgr. Nataša Dzubaková</OwnerName>
        <HelperText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi et
          nesciunt sed excepturi quaerat, incidunt a architecto molestiae! Saepe
          iusto temporibus eaque voluptate officiis facere veniam amet
          praesentium id.
        </HelperText>
      </Paper>
    </>
  );
};

export default AboutWrapper;
