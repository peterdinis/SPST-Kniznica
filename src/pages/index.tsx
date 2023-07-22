import { Hero, Services } from "@/components/hero";
import { Creator, Footer } from "@/components/shared";
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