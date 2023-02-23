import TimeLine from "@/components/hero/Timeline";
import AboutWrapper from "../components/about/AboutWrapper";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <>
      <AboutWrapper />
      <TimeLine />
    </>
  );
};

export default AboutPage;
