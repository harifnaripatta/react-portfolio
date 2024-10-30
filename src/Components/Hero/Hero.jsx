import React from "react";
import "./Hero.css";
import "animate.css";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-img">
          <img src="./assets/images/hero/hero-img.png" alt="hero-img" />
        </div>
        <div className="hero-content animate__animated animate__backInRight">
          <h1>
            Building Digital Experience That <br />
            Inspire
          </h1>
          <p>
            Passionate Frontend Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions
          </p>
          <button className="btn">
            Hire Me
            <img src="/arrow-up-right.svg" alt="arrow up light" />
          </button>
        </div>
      </div>
      <div className="hero-line">
        <img src="./bottom-line-right.png" alt="bottom-line-right" />
      </div>
    </>
  );
};

export default Hero;
