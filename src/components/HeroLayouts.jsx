import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function HeroLayouts() {
  return (
    <div
      className="hero-layouts-container"
      style={{
        background: `url('${process.env.PUBLIC_URL}/pexels-ian-panelo-7116587.jpg')`,
        backgroundRepeat: "repeat",
      }}
    >
      <Nav />
      <div className="hero-design-content">
        <div className="hero-design-top">
          <h1>HERO LAYOUTS</h1>
        </div>

        <div className="hero-imgs-rows">
          <div className="hero-imgs-row-1">
            <div
            // style={{
            //   background: `url('${process.env.PUBLIC_URL}/hero-design1.png')`,
            //   backgroundRepeat: "no-repeat",
            //   width: "100%",
            //   height: "auto",
            // }}
            >
              <img src="hero-design1.png" alt="web design mockup" />
            </div>

            <div
            // style={{
            //   background: `url('${process.env.PUBLIC_URL}/hero-design2.png')`,
            //   backgroundRepeat: "no-repeat",
            //   width: "45.867rem",
            //   height: "35.0rem",
            // }}
            >
              <img src="hero-design2.png" alt="hero design mockup" />
            </div>
            <div
            // style={{
            //   background: `url('${process.env.PUBLIC_URL}/hero-design3.png')`,
            //   backgroundRepeat: "no-repeat",
            //   width: "45.867rem",
            //   height: "35.0rem",
            // }}
            >
              <img src="hero-design3.png" alt="hero design mockup" />
            </div>
          </div>
          <div className="hero-imgs-row-2">
            <div
            // style={{
            //   background: `url('${process.env.PUBLIC_URL}/hero-design4.png')`,
            //   backgroundRepeat: "no-repeat",
            //   width: "45.867rem",
            //   height: "35.0rem",
            // }}
            >
              {" "}
              <img src="hero-design4.png" alt="hero design mockup" />
            </div>
            <div
            // style={{
            //   background: `url('${process.env.PUBLIC_URL}/hero-design5.png')`,
            //   backgroundRepeat: "no-repeat",
            //   width: "45.867rem",
            //   height: "35.0rem",
            // }}
            >
              <img src="hero-design5.png" alt="hero design mockup" />
            </div>
            <div>
              <img src="hero-design6.png" alt="hero design mockup" />
            </div>
          </div>
          <div className="hero-imgs-row-3">
            <div></div>
          </div>
        </div>
      </div>
      <a href="mailto:aliau2050@gmail.com" className="nav-link">
        <div className="hero-button-contact">
          <button className="primary-button">Contact me</button>
        </div>
      </a>
      <div className="hero-close-ups">
        <p>CLOSE-UPS</p>
      </div>
      <div className="large-hero-images">
        <img src="hero-design1.png" alt="hero design mockup" />
        <img src="hero-design2.png" alt="hero design mockup" />
        <img src="hero-design3.png" alt="hero design mockup" />
        <img src="hero-design4.png" alt="hero design mockup" />
        <img src="hero-design5.png" alt="hero design mockup" />
        <img src="hero-design6.png" alt="hero design mockup" />
      </div>
      <div className="  linkedin-bar">
        <p>Say hi on: </p>
        <a
          href="https://linkedin.com/in/alishaupton"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <button>LinkedIn</button>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}
