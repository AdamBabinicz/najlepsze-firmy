import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import Cards from "../Products/Cards";
import Modal from "../Products/Modal";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>100 firm i produktów, które warto zobaczyć</title>
      </Helmet>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <Cards />
      <Modal />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
