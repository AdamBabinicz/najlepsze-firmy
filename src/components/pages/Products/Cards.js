import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Cards() {
  return (
    <>
      <Helmet>
        <title>Galeria firm i produktów</title>
      </Helmet>

      <div className="cards">
        <h1>100 najlepszych firm w mieście!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/mobilna.jpg"
                text="Pranie dywanów, tapicerki meblowej, czyszczenie posadzek, płytek i kostki brukowej"
                label="Mobilna pralnia SUPER PUCUŚ"
                path=""
                url={
                  <a href="https://pranie-dywanow.j.pl" target="_blank">
                    pranie-dywanow.j.pl
                  </a>
                }
              />
              <CardItem
                src="images/mis.jpg"
                text="Wynajem namiotów imprezowych, zamków i zjeżdżalni dmuchanych, organizacja eventów"
                label="SŁODKOLANDIA wita:"
                path=""
                url={
                  <a href="https://www.slodkolandia.cba.pl" target="_blank">
                    www.slodkolandia.cba.pl
                  </a>
                }
              />

              <CardItem
                src="images/grama.jpg"
                text="Korepetycje z języka angielskiego, materiały edukacyjne dla nauczycieli i uczniów"
                label="Ciasteczkowa GRAMA"
                path=""
                url={
                  <a href="https://grama.netlify.app" target="_blank">
                    grama.netlify.app
                  </a>
                }
              />
              <CardItem
                src="images/font.jpg"
                text="Wynajem fontanny czekoladowej"
                label="Firma eventowa"
                path=""
                url={
                  <a
                    href="https://www.fontanny.slodkolandia.cba.pl"
                    target="_blank"
                  >
                    www.fontanny.slodkolandia.cba.pl
                  </a>
                }
              />

              <CardItem
                src="images/popcorn.jpg"
                text="Wynajem urządzeń do popcornu i waty cukrowej"
                label="Firma eventowa"
                path=""
                url={
                  <a
                    href="https://www.slodkolandia.cba.pl/dmuchance-popcorn-warszawa-lublin-kielce-radom"
                    target="_blank"
                  >
                    firma eventowa
                  </a>
                }
              />
              <CardItem
                src="images/zamki.jpg"
                text="Wynajem urządzeń rekreacyjnych"
                label="Firma eventowa"
                path=""
                url={
                  <a href="https://zamki.netlify.app" target="_blank">
                    zamki.netlify.app
                  </a>
                }
              />

              <CardItem
                src="images/pralnia.jpg"
                text="Pralnia stacjonarna i mobilna"
                label="Firma usługowa"
                path=""
                url={
                  <a href="https://pranie-dywanow.netlify.app/" target="_blank">
                    pranie-dywanow.netlify.app
                  </a>
                }
              />
              <CardItem
                src="images/korepetycje.jpg"
                text="Korepetycje z matematyki"
                label="Firma edukacyjna"
                path=""
                url={
                  <a href="https://korepetycje.netlify.app" target="_blank">
                    RAF-EDU
                  </a>
                }
              />
              <CardItem
                src="images/namioty.jpg"
                text="Wynajem namiotów imprezowych, stołów, krzeseł i oświetlenia do namiotów"
                label="Firma usługowa"
                path=""
                url={
                  <a
                    href="https://wynajem-namiotow.netlify.app"
                    target="_blank"
                  >
                    Wynajem namiotów
                  </a>
                }
              />
              <CardItem
                src="images/man.svg"
                text="To miejsce czeka na Ciebie"
                label="Firma"
                path=""
                url={
                  <a href="" target="_blank">
                    Twoja firma
                  </a>
                }
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
