import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="home-container">
      <div className="header-hero-container">
        <Nav />

        <div className="hero">
          <div className="hero-top">
            <p className="welcome">WELCOME TO MY</p>

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
            <a href="mailto:aliau2050@gmail.com" className="nav-link">
              <div>
                <button className="primary-button">Contact me</button>
              </div>
            </a>
          </div>
          {/* <div className="hero-bottom">
            <button className="portfolio-button">Let's see what I do</button>
          </div> */}
        </div>
      </div>
      <div className="what-container">
        {" "}
        <div className="what-border">
          <div
            className="what-i-do"
            style={{
              background: `url('${process.env.PUBLIC_URL}/what-i-do-frame.png')`,
              backgroundRepeat: "no-repeat",
              width: "478px",
              height: "490px",
            }}
          >
            <h1>What I Do</h1>
            <div className="what-i-do-small-text">
              {/* <h2>CONTENTS</h2> */}
              <div className="contents-list">
                <p>
                  Web Design
                  <br />
                  Mobile App Design
                  <br /> Email Design <br />
                  Graphic Design <br />
                  Digital Illustration
                  <br /> Analog Drawing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="web-design-container">
        <div className="wdc-top">
          <h1>WEB DESIGN</h1>
          <div className="made-in">
            <p>
              MADE IN FIGMA <br />
              2024
            </p>
          </div>
        </div>
        <div className="wdc-left-right">
          <div className="wdc-left">
            <div className="wdc-left-bottom">
              <div className="h2-h3-container">
                <h2>TRULY</h2>
                <h3>POTTERY SHOP UI</h3>
              </div>
              <p>
                This is a conceptual pottery shop web design that offers
                handmade artisan pieces. It features a home landing page,
                artisan/about, product, and cart page.
              </p>
            </div>
            <div className="buttons-container">
              <a href="mailto:aliau2050@gmail.com" className="nav-link">
                <div>
                  <button className="primary-button">Contact me</button>
                </div>
              </a>{" "}
              <a
                href="https://bit.ly/trulywebdesign"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <button>See the full prototype</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wdc-right">
            <a
              href="https://bit.ly/trulywebdesign"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="truly-white-bg-gif.gif"
                alt="web design mockup"
                style={{ width: "385px", height: "216.92px" }}
              />
            </a>
            <p>Designed with large type features and a visible grid.</p>
          </div>
        </div>
      </div>

      <div className="mobile-ux-container">
        <div className="mobile-top">
          <div className="made-in">
            <p>MADE IN FIGMA</p>
            <p>2024</p>
          </div>
          <h1>MOBILE UI/UX</h1>
        </div>
        <div className="mobile-bottom">
          <div className="mobile-left-right">
            <div className="mobile-left">
              <div className="h2-h3-container">
                <h2>CLEANUP APP</h2>
                <h3>SIGN-UP SCREEN</h3>
              </div>
              <div className="mobile-button">
                <div>
                  <button className="primary-button">See the case study</button>
                </div>
              </div>
            </div>
            <div className="mobile-right">
              <div className="cards">
                <div className="card">
                  <div>
                    <h3>SIGN-UP SCREEN</h3>
                    <h4>CONCEPTUAL</h4>
                  </div>{" "}
                  <img src="mobile-mockup-thumbnail.png" />
                  <div className="card-bottom">
                    <p>
                      This sign-up screen allows users to search for and sign up
                      for local volunteering events.
                    </p>
                    <p className="see-more">See More {`>`}</p>
                  </div>
                </div>
                <div className="card">
                  <div>
                    <h3>WIREFRAMING</h3>
                    <h4>DETAILED SKETCH</h4>
                  </div>{" "}
                  <div
                    className="mobile-gif"
                    style={{
                      width: "263px",
                      height: "193px",
                      background: `url('${process.env.PUBLIC_URL}/mobile-sketch-gif.gif')`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "112px",
                      // paddingTop: "16px",
                      border: ".5px solid #41423C",
                      backgroundColor: "#E0E0E0",
                    }}
                  >
                    {/* <img src="mobile-sketch-gif.gif" alt="mobile ui design" /> */}
                  </div>
                  <div className="card-bottom">
                    <p>
                      After watching a user interview for insight on what
                      features to add, I sketched a few designs.
                    </p>
                    <p className="see-more">See More {`>`}</p>
                  </div>
                </div>
                <div className="card">
                  <div>
                    <h3>HIGH-FIDELITY</h3>
                    <h4>DESIGNER</h4>
                  </div>{" "}
                  <img src="mobile-app-final-scroll.png" />
                  <div className="card-bottom">
                    <p>
                      The final scroll of the screen. What would I change? The
                      hierarchy and non-fixed RSVP.
                    </p>
                    <p className="see-more">See More {`>`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="email-design-container">
        <div className="email-top">
          <h1>EMAIL + DESIGN</h1>
        </div>
        <div className="email-mid">
          <div className="email-mockup-container">
            <p>EMAIL ENTRY</p>
            <img src="email-entry.png" alt="email-design" />
          </div>
          <div className="email-mockup-container">
            <img src="email-first-scroll.png" alt="email-design" />
            <p>FIRST SCROLL</p>
          </div>
          <div className="email-mockup-container">
            <p>FINAL SCROLL</p>
            <img src="email-final-scroll.png" alt="email-design" />
          </div>
        </div>
        <a href="mailto:aliau2050@gmail.com" className="nav-link">
          <div className="email-bottom">
            <button className="primary-button">Contact me</button>
          </div>
        </a>
      </div>

      <div className="graphic-design-container">
        <div className="graphic-left">
          <img src="print-design-booklet-1.png" alt="booklet design" />
        </div>
        <div className="graphic-right">
          <div className="smaller-booklet-images">
            <img src="print-design-booklet-2.png" alt="booklet design" />
            <img src="print-design-booklet-3.png" alt="booklet design" />
          </div>
          <div className="graphic-right-bottom">
            <div className="graphic-headers">
              <h1>GRAPHIC DESIGN</h1>
              <h2>A FULL BOOKLET DESIGN</h2>
            </div>
            <div></div>
            <button className="primary-button">See the entire layout</button>
          </div>
        </div>
      </div>

      <div
        className="hero-designs-container"
        style={{
          background: `url('${process.env.PUBLIC_URL}/hero-layouts-bg.png')`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="hero-designs-left">
          <div className="h1-and-p">
            <h1>Hero Layouts</h1>
            <p>
              These are <span className="bold-text">6 variations</span> of a
              single design. Which would you choose?
            </p>{" "}
          </div>
          <div>
            <button className="primary-button">See them up close</button>
          </div>{" "}
        </div>
        <div className="hero-designs-right">
          <img src="hero-designs-gif.gif" alt="web design gif" />
        </div>
      </div>

      <div>
        <div className="the-artist-container">
          <div className="made-in">
            <p>MADE ON PAPER</p>
          </div>
          <div className="the-artist-content">
            <div className="the-artist-left">
              <div className="the-artist-left-content">
                <h1>The Artist.</h1>
                <button className="primary-button">See more</button>
              </div>
            </div>
            <div className="the-artist-right">
              <div className="the-artist-right-a">
                <img
                  src="eye-drawing-3.png"
                  alt="eye drawing"
                  style={{
                    width: "274px",
                    height: "393px",
                  }}
                />
                <h2>Analog Drawing.</h2>
              </div>
              <div className="the-artist-right-b">
                <img
                  src="eye-leaves-4.png"
                  alt="eye drawing"
                  style={{
                    width: "245px",
                    height: "348px",
                  }}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="digital-illu-container">
        <p>MADE IN ADOBE ILLUSTRATOR</p>
        <div className="digital-illu-content">
          <div className="home-illu-left">
            <div>
              <img
                src="hands-pink-art-1.png"
                style={{
                  width: "305px",
                  height: "419px",
                }}
              />
            </div>
            <div className="digital-illu-right-imgs">
              <img
                src="fancy-sketch-bw.png"
                style={{
                  width: "275px",
                  height: "195px",
                }}
              />
              <img
                src="fancy-sketch-color.png"
                style={{
                  width: "275px",
                  height: "195px",
                }}
              />
            </div>
          </div>
          <div className="digital-illu-right">
            <div className="digital-illu-right-content">
              <h1>Digital Illustrator</h1>
              <button className="primary-button">See more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="portait-artist-container">
        <div className="pa-content">
          <div>
            <p className="made-in">MADE ON PAPER</p>
          </div>
          <div className="pa-bottom">
            <div className="pa-left-content">
              <div className="pa-h1-p">
                <h1>Portrait Artist</h1>
                <p>
                  Here is one that I enjoyed drawing, although it is quite
                  emotional. I followed Ruben Belloso Adorna’s work and wanted
                  to make my own version of his.
                </p>
              </div>
              <button>See this portrait up close</button>
            </div>
            <div className="pa-right">
              <img
                src="man-face-gallery-2.png"
                alt="portrait drawing process"
                style={{
                  width: "528px",
                  height: "458px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="thank-you-container">
        <div className="ty-left">
          <div className="ty-left-top">
            <h1>Want to work on a project?</h1>
          </div>
          <div className="ty-left-bottom">
            <a href="mailto:aliau2050@gmail.com" className="nav-link">
              <div>
                <button className="primary-button">Contact me</button>
              </div>
            </a>
          </div>
        </div>
        <div className="ty-right">
          <p>Thanks for viewing my portfolio.</p>
        </div>
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
