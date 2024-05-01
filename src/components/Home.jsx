import React, { useState } from "react";
import Nav from "./Nav";
import EmailDesign from "./EmailDesign";
import Mobile from "./Mobile";
import Footer from "./Footer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="home-container">
      <div>
        <Nav />
      </div>
      <div className="hero">
        <div className="hero-image">
          <a
            href="https://bit.ly/trulywebdesign"
            target="_blank"
            rel="noopener"
          >
            <img
              src="truly-anim-crop-signal.gif"
              alt="web design mockup"
              style={{ width: "732px" }}
            />
          </a>
        </div>
        <div className="hero-south">
          <div className="hero-left">
            <p>
              Hi, I'm Alisha, a Digital Designer with knowledge of Frontend
              Development:
              <br />
              <strong>HTML5</strong>, <strong>CSS3</strong> some{" "}
              <strong>JavaScript & React</strong>.
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-right-top">
              <div className="digital">Digital</div>
              <div className="designer">Designer</div>
            </div>
            <div className="hero-right-middle">AL&#205;SHA UPTON</div>
          </div>
        </div>
      </div>
      <div className="hello">
        <p>HELLO</p>
      </div>
      <div className="recent-projects">
        <div className="text-and-buttons">
          <h2>Let's see some recent designs</h2>

          <div className="work-buttons">
            <button>Web Design</button>
            <button>Email Marketing Design</button>
            <button>Mobile App Design</button>
            <button>Case Studies</button>
            <button>Artwork</button>
          </div>
        </div>

        <div className="work-cards">
          <div className="work-cards-top">
            <div className="truly-web-design">
              {/* <img
                src="truly-web-design-project.png"
                alt="mockup"
                // style={{ maxWidth: "628px" }}
                
              /> */}

              <img
                src={
                  isHovered
                    ? "night-desktop-mammoth-mockup.png"
                    : "truly-web-design-project.png"
                }
                alt="web design mockup"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ maxWidth: "100%" }}
              />
              <p>Ecommerce Pottery Shop</p>
            </div>
            <div>
              <img
                src="livee-mockup3.png"
                alt="mockup"
                // style={{ width: "628px" }}
                style={{ maxWidth: "100%" }}
              />

              <p>Email Marketing Design</p>
            </div>
          </div>

          <div className="work-cards-bottom">
            <div className="left">
              <div className="coming-soon">Coming Soon</div>
              <p>Event Sign-up Screen</p>
            </div>
            <div>
              <div className="coming-soon">Coming Soon</div>
              <p>CleanUp App Case Study</p>
            </div>
          </div>
        </div>
      </div>

      <div className="design-ess">
        <div className="design-ess-left">
          <div className="design-ess-text">
            <p>RESPECT FOR DESIGN PRINCIPLES</p>
            <h1>THE DESIGN IS ESSENTIAL</h1>
            <p>
              Whether it's typography, color theory, or simple spacing, I aim to
              pay close attention to all of it, iterating along the way.
            </p>
          </div>
          <div>
            <button className="design-ess-button">Design my site</button>
          </div>
        </div>
        <div className="design-ess-right">
          <img src="alisha2.png" alt="designer" />
        </div>
      </div>
      <div className="services">
        <h1>SERVICES</h1>
      </div>

      <EmailDesign />
      <Mobile />
      <Footer />
    </div>
  );
}
