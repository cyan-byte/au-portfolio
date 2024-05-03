import React, { useState } from "react";
import Nav from "./Nav";
import EmailDesign from "./EmailDesign";
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
              src="truly-white-bg-gif.gif"
              alt="web design mockup"
              style={{ width: "732px" }}
            />
          </a>
        </div>
        <div className="hero-south">
          <div className="hero-south-top">
            <p>Digital</p>
            <p>Designer</p>
          </div>
          <div className="hero-south-middle alisha">
            <h1>AL&#205;SHA UPTON</h1>
          </div>
          <div className="hero-south-bottom">
            <p>
              {" "}
              Knowledge of Front-end Development:{" "}
              <strong>HTML, CSS, JS, & React</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="home-portfolio">
        <p>PORTFOLIO</p>
      </div>
      <div className="home-projects">
        <div className="hp-top">
          <h2>Let's see some recent designs</h2>

          <div className="hp-middle">
            <button>Web Design</button>
            <button>Email Design</button>
            <button>Mobile App Design</button>
            <button>Case Study</button>
            <button>Art Work</button>
          </div>
        </div>
        <div className="hp-bottom-container">
          <div className="hp-bottom-left">
            <img
              src="mobile-app-screen-smaller.png"
              alt="mobile app design"
              style={{ width: "306.96px" }}
            />
            <p>Event Sign-up Screen</p>
          </div>
          <div className="hp-bottom-right">
            <div className="hp-bottom-right-top">
              <div>
                <a
                  href="https://bit.ly/trulywebdesign"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="truly-home-zoom.png"
                    alt="web design"
                    style={{ width: "350px", height: "276px" }}
                  />
                </a>
                <p>Ecommerce Pottery Shop</p>
              </div>
              <div>
                <img
                  src="livee-home-zoom.png"
                  alt="web design"
                  style={{ width: "350px", height: "276px" }}
                />
                <p>Perfume Shop Design</p>
              </div>
            </div>

            <div className="hp-bottom-right-bottom">
              <div>
                <div className="coming-soon">Coming Soon</div>
                <p className="coming-soon-caption">Ecommerce Pottery Shop</p>
              </div>
              <div>
                <div className="coming-soon">Coming Soon</div>
                <p className="coming-soon-caption">Ecommerce Pottery Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-feature-container">
        <div className="feature-left">
          <div className="feature-text">
            <p className="feature-text-top">LIGHTBULB MOMENTS</p>
            <h2 className="feature-text-heading">BRINGING NEW IDEAS TO LIFE</h2>
            <p className="feature-text">
              Want a site with micro interactions? They do add a bit more life
              to a simple design.
            </p>
            <div className="feature-buttons">
              <button className="contact-button">Got an idea?</button>{" "}
              <button className="contact-ghost-button">See some ideas</button>
            </div>
          </div>
        </div>
        <div className="feature-right">
          <img
            src="vertical-hero-design5.png"
            alt="lightbulb gif"
            style={{ width: "497px", borderRadius: "16px" }}
          />
        </div>
      </div>
      <EmailDesign />
      {/* <Mobile /> */}
      <Footer />
    </div>
  );
}
