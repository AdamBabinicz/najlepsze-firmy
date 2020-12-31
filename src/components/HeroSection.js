import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Modal from "../components/pages/Products/Modal";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel1,
  buttonLabel2,
  img,
  video,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <video src="/videos/video-7.mp4" autoPlay loop muted />
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/cards">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel1}
                  </Button>
                </Link>
                <Link to="/modal">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel2}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
