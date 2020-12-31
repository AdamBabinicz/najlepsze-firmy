import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import { Helmet } from "react-helmet";

function SignUp() {
  return (
    <>
      <Helmet>
        <title>Dołącz do elitarnej setki</title>
      </Helmet>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
