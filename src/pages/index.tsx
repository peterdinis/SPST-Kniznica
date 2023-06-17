import Footer from "@/components/shared/Footer";
import Hero from "@/components/hero/Hero";
import Services from "@/components/hero/Services";
import Creator from "@/components/shared/Creator";
import { NextPage } from "next";

 
const Homepage: NextPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Footer />
      <Creator />
    </>
  )
}

export default Homepage