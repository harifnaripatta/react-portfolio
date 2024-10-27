import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
      </div>
    </div>
  );
};

export default App;
