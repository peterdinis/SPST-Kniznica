import Header from "../shared/Header";
import Paper from "@mui/material/Paper";

const AboutWrapper: React.FC = () => {
  return (
    <>
      <Header name="O Stránke" />
      <Paper elevation={3}>
        <h1 className="text-2xl text-red-700 text-center mt-12">Správca je Mgr. Nataša Dzubaková</h1>
        <p className="whitespace-pre-line text-2xl mt-8 ml-2 p-0 text-center">
          Knižnicu nájdete smerom na internát na 3 poschodí.
        </p>
      </Paper>
    </>
  );
};

export default AboutWrapper;
