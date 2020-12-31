import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import { Helmet } from "react-helmet";

function Services() {
  return (
    <>
      <Helmet>
        <title>Nasza oferta cenowa</title>
      </Helmet>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
