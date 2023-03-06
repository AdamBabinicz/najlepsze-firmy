import React from "react";
import "./Modal.css";
import HeroSection from "../../HeroSection";
import { Helmet } from "react-helmet";
// import { homeObjFive } from "./Data";

function Modal() {
  return (
    <>
      <Helmet>
        <title>Regulamin naszego serwisu</title>
      </Helmet>
      {/* <Pricing /> */}
      {/* <HeroSection {...homeObjFive} /> */}
      <div className="modal">
        <h1>REGULAMIN</h1>
        <p>
          Aby przystąpić do programu
          <strong> "100 najlepszych firm i produktów w mieście"</strong>, należy
          zgłosić swój akces i wybrać odpowiedni plan.
        </p>
        <p>
          Zamówienia prosimy zgłaszać mailowo na adres
          <em>
            <b> puaro@vp.pl</b>
          </em>
          , lub telefonicznie <b>+48 733 702 632</b>.
        </p>
        <p>
          W treści zamówienia podajemy nazwę firmy/produktu, krótki opis
          działalności oraz adres strony internetowej. Do faktury należy podać
          nazwę firmy, adres i NIP.
        </p>
        <p>
          Po złożeniu zamówienia prosimy o dokonanie wpłaty za usługę na
          wskazane konto bankowe z dopiskiem <b>"Mój Plan"</b>.
        </p>
        <p>
          Państwa firma lub produkt zostaną dodane do bazy natychmiast po
          otrzymaniu przelewu.
        </p>
        <p>
          Dowodem zawarcia umowy jest faktura bez VAT wysłana drogą mailową.
        </p>
      </div>
    </>
  );
}

export default Modal;
