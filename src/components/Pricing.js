import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Pricing.css";
import { BsExclude, BsDiamondFill, BsUnion, BsSubtract } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Cennik</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsExclude />
                  </div>
                  <h3>Żelazny</h3>
                  <h4>9,99 PLN</h4>
                  <p>za miesiąc</p>
                  {/* <ul className="pricing__container-features">
                    <li>dodanie do bazy</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 Limit</li>
                  </ul> */}
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Zmień Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsUnion />
                  </div>
                  <h3>Srebrny</h3>
                  <h4>27,99 PLN</h4>
                  <p>za 3 miesiące</p>
                  {/* <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 Limit</li>
                  </ul> */}
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Zmień Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsSubtract />
                  </div>
                  <h3>Złoty</h3>
                  <h4>54,99 PLN</h4>
                  <p>za pół roku</p>
                  {/* <ul className="pricing__container-features">
                    <li>1000 Transactions</li>
                    <li>3,5% Cash Back</li>
                    <li>$100,000 Limit</li>
                  </ul> */}
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Zmień Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsDiamondFill />
                  </div>
                  <h3>Diamentowy</h3>
                  <h4>99,99 PLN</h4>
                  <p>za rok</p>
                  {/* <ul className="pricing__container-features">
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                  </ul> */}
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Zmień Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
