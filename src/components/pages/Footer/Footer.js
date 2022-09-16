import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGoogle,
  FaBullhorn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Dołącz do naszego ekskluzywnego członkostwa, aby pozyskiwać nowych
          Klientów
        </p>
        <p className="footer-subscription-text">W naszym klubie są najleps!</p>
        <div className="input-areas">
          {/* <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Twój Email"
            />
            <Button buttonStyle="btn--outline">Subskrybuj</Button>
          </form> */}
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Usługi</h2>
            <p className="icon-link ls">Projektowanie stron www</p>
            <p className="icon-link ls">Pozycjonowanie</p>
            <p className="icon-link ls">Marketing</p>
            <p className="icon-link ls">Prowadzenie mediów społecznościowych</p>
          </div>
          <div className="footer-link-items">
            <h2>Kontakt</h2>
            <Link
              className="icon-link"
              to=""
              target="_blank"
              aria-label="poczta"
            >
              <MdEmail />
              &nbsp;&nbsp;{<a href="mailto:puaro@vp.pl">puaro@vp.pl</a>}
            </Link>
            <Link
              className="icon-link"
              to=""
              target="_blank"
              aria-label="telefon"
            >
              <MdPhone />
              &nbsp;&nbsp;{<a href="tel:+48733702632">+48 733 702 632</a>}
            </Link>
            {/* <Link to="/">Kontakt</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>  */}
          </div>
        </div>
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
           <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="//www.instagram.com">Instagram</Link>
            <Link to="//pl-pl.facebook.com">Facebook</Link>
            <Link to="//www.youtube.com">Youtube</Link>
            <Link to="//twitter.com">Twitter</Link>
            <Link to="//pl.linkedin.com">LinkedIn</Link>
          </div> 
        </div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <FaBullhorn className="navbar-icon" />
              💯
            </Link>
          </div>
          <small className="website-rights">
            💯 2020 - {new Date().getFullYear()}.
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="//www.facebook.com/Najlepsze-firmy-w-mieście-108009641024656"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="//www.instagram.com/najlepszefirmy"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to="//www.youtube.com/channel/UCVVj8LcB23riwVRpnbgfnfw/videos"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="//twitter.com/Ewa28502857"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="//100-najlepszych-firm-w-miescie.business.site"
              target="_blank"
              aria-label="Google"
            >
              <FaGoogle />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
