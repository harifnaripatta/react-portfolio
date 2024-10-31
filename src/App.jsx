import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
