import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="home-container">
      <div
        className="header-hero-container"
        style={{
          background: `url('${process.env.PUBLIC_URL}/pale-navy-sky-clouds.jpg')`,
        }}
      >
        <Nav />

        <div className="hero">
          <div className="hero-top">
            <p>WELCOME TO MY</p>

            <div className="portfolio-header">
              <h1>
                PORT-
                <br />
                FOLIO
              </h1>
            </div>
            <div className="sub-header">
              <p className="digital-designer">DIGITAL DESIGNER</p>
              <p className="junior"> & JUNIOR FRONT-END DEVELOPER</p>
            </div>
          </div>
          <div className="hero-bottom">
            <button className="portfolio-button">Let's see what I do</button>
          </div>
        </div>
      </div>
      <div className="truly-gif">
        <a href="https://bit.ly/trulywebdesign">
          <img
            src="truly-white-bg-gif.gif"
            alt="web design mockup"
            style={{ width: "1110.07px", height: "639.85px" }}
          />
        </a>
      </div>

      <div
        className="home-portfolio"
        style={{
          background: `url('${process.env.PUBLIC_URL}/pale-navy-sky-clouds.jpg')`,
        }}
      >
        <div className="home-portfolio-heading">
          <div className="home-portfolio-top">
            <h1>Portfolio</h1>
          </div>
          <div className="home-portfolio-buttons">
            <button>Web Design</button>
            <button>Mobile Design</button>
            <button>Email Design</button>
            <button>Layout Design</button>
            <button>Illustration</button>
            <button>Portrait Drawing</button>
          </div>
        </div>
        <div className="portfolio-thumbnails">
          <div>
            <img
              src="truly-web-design-project.png"
              alt="web design"
              style={{
                width: "320px",
                height: "204px",
              }}
              className="thumbnail"
            />
            <p>Web Design</p>
          </div>
          <div>
            <img
              src="email-design-1a.png"
              alt="email design"
              style={{ width: "320px", height: "204px" }}
              className="thumbnail"
            />
            <p>Email Design</p>
          </div>
          <div>
            <img
              src="fancy-ruffle-top.png"
              alt="email design"
              style={{ width: "320px", height: "204px" }}
              className="thumbnail"
            />
            <p>Illustration</p>
          </div>
        </div>
      </div>

      <div className="bw-images">
        <img
          src="the-designer.png"
          alt="images of the designer"
          className="the-designer"
        />
      </div>

      <div className="linkedin-bar">
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
