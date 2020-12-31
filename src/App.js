import React from "react";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";
import SignUp from "./components/pages/SignUp/SignUp";
import Cards from "./components/pages/Products/Cards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/pages/Products/Modal";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/cards" component={Cards} />
        <Route path="/modal" component={Modal} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
