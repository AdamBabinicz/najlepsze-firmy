import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import { Helmet } from "react-helmet";

function Products() {
  return (
    <>
      <Helmet>
        <title>Baza 100 najlepszych firm i produktów</title>
      </Helmet>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
