/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Tabarak Khan",
  title: "Web Developer & Software Engineer",
  email: "Tabarak.khan@studentambassadors.com",
  gitHub: "https://github.com/Babasain",
  instagram: "https://instagram.com/tabarak1108?igshid=MzNlNGNkZWQ4Mg==",
  linkedIn: "https://www.linkedin.com/in/tabarak-alizai-357262249/",
  medium: "",
  twitter: "https://twitter.com/TabarakKhan29",
  youTube: "https://youtu.be/WV49eM2-1YI",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
