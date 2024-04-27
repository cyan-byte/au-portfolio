import React from "react";
import Nav from "./Nav";
import Truly from "./Truly";
import EmailDesign from "./EmailDesign";
import Mobile from "./Mobile";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="home-container">
      <div>
        <Nav />
      </div>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-image">
            <a
              href="https://bit.ly/trulywebdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="truly-mockup-static-slant.png"
                alt="website design mockup"
                //   style={{ width: "632px", height: "auto" }}
              />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-text">
            <h1 className="introduce">I'm Alisha,</h1>
            <p>
              a Digital Designer who also knows some Frontend Development (HTML,
              CSS, some JavaScript & React).
            </p>
            <p>Let’s see the full homepage in action:</p>
          </div>
        </div>
      </div>
      <Truly />
      <EmailDesign />
      <Mobile />
      <Footer />
    </div>
  );
}
