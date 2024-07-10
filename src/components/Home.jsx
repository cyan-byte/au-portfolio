import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

import Footer from "./Footer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="home-container">
      <div className="header-hero-container">
        <Nav />
        {/* <div className="hero">
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
        </div> */}

        <div
          className="hero-alt"
          style={{
            background: `url('${process.env.PUBLIC_URL}/hero-layouts-bg.png')`,
            backgroundRepeat: "repeat",
          }}
        >
          <h1 className="hero-alt-h1">
            Alisha
            <br />
            Upton
          </h1>
          <div className="sub-header">
            <p className="digital-designer">DIGITAL DESIGNER</p>
            <p className="junior"> & JUNIOR FRONT-END DEVELOPER</p>
          </div>
          <div className="buttons-container">
            <a href="mailto:aliau2050@gmail.com" className="nav-link">
              <div>
                <button className="primary-button">Contact me</button>
              </div>
            </a>
            <NavLink to="/about" activeClassName="about-button">
              <div>
                <button className="about-button">About</button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="branding">
        <div className="branding-h1-p">
          <h1>BRAND IDENTITY</h1>
          <p>
            While working with a design agency owner, I developed an interest in{" "}
            <span className="bold-text pink">branding</span>; it is fun to go
            through the process, create each puzzle piece and bring the elements
            together into a cohesive brand identity.
          </p>
        </div>
        <div className="branding-imgs">
          <div className="branding-imgs-top">
            <img
              src="brand-i-1.png"
              alt="brand image"
              style={{ width: "50%", height: "auto" }}
            />
            <img
              src="brand-i-2.png"
              alt="brand image"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
          <div className="branding-imgs-bottom">
            <img
              src="brand-i-3.png"
              alt="brand image"
              style={{ width: "50%", height: "auto" }}
            />
            <img
              src="brand-i-4.png"
              alt="brand image"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
        <a href="brand-identity.pdf" target="_blank">
          <div>
            <button className="primary-button">Full Brand Identity</button>
          </div>
        </a>
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
          <div className="column-1">
            <div className="h2-h3-container">
              <h2>CLEANUP APP</h2>
              <h3>SIGN-UP SCREEN</h3>
            </div>
            <div className="mobile-button">
              <Link to="/mobile-uiux">
                <div>
                  <button className="primary-button">See the case study</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="mobile-mockup-columns">
            <div className="card column-2">
              <div>
                <h3>SIGN-UP SCREEN</h3>
                <h4>CONCEPTUAL</h4>
              </div>{" "}
              <img src="mobile-mockup-thumbnail.png" />
              <div className="card-bottom">
                <p>
                  This sign-up screen allows users to search for and sign up for
                  local volunteering events.
                </p>
              </div>
            </div>
            <div className="card column-3">
              <div>
                <h3>WIREFRAMING</h3>
                <h4>DETAILED SKETCH</h4>
              </div>{" "}
              <div
                className="mobile-gif"
                style={{
                  width: "26.3rem",
                  height: "19.3rem",
                  background: `url('${process.env.PUBLIC_URL}/mobile-sketch-gif.gif')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "11.2rem",
                  border: ".05rem solid #41423C",
                  backgroundColor: "#E0E0E0",
                }}
              ></div>
              <div className="card-bottom">
                <p>
                  After watching a user interview for insight on what features
                  to add, I sketched a few designs.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="card column-4">
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
            </div>
          </div> */}
        </div>
      </div>

      <div className="mobile-screens">
        <div className="mobile-images">
          <img src="mobile-screen1.png" alt="mobile screen design" />
          <img src="mobile-screen2.png" alt="mobile screen design" />
        </div>
        <div className="mobile-screens-button">
          <Link to="/mobile-uiux">
            <div>
              <button className="primary-button">See the case study</button>
            </div>
          </Link>{" "}
        </div>
      </div>

      <div className="  what-container">
        <div className="what-border">
          <div
            className="what-i-do"
            style={{
              background: `url('${process.env.PUBLIC_URL}/what-i-do-frame.png')`,
              backgroundRepeat: "no-repeat",
              width: "47.8rem",
              height: "49rem",
            }}
          >
            <h1>What I Do</h1>
            <div className="what-i-do-small-text">
              <div className="contents-list">
                <h3>CONTENTS</h3>
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
                style={{ width: "38.5rem", height: "21.692rem" }}
              />
            </a>
            <p>Designed with large type features and a visible grid.</p>
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
          <Link to="/hero-layouts" className="nav-link">
            <div>
              <button className="primary-button">See all six</button>
            </div>
          </Link>
        </div>
        <div className="hero-designs-right">
          <img src="hero-designs-gif.gif" alt="web design gif" />
        </div>
      </div>

      <div className="ui-design-container">
        <div className="ui-design-top">
          <div className="ui-header-row">
            <h1>UI DESIGN</h1>
            <p className="made-in">MADE IN ADOBE ILLLUSTRATOR</p>
          </div>
          <div className="ui-design-top-bottom">
            <div>
              <h3>PRODUCT</h3>
              <p className="email-app-text">Email App</p>
            </div>
            <div>
              <h3>TASK</h3>
              <p className="email-app-text">UI Design</p>
            </div>
          </div>
        </div>
        <div className="ui-design-bottom">
          <div className="ui-bottom-left">
            <img src="email-inbox-mockup.png" />
            <img src="email-open-mockup.png" />
          </div>
          <div className="ui-bottom-right">
            <div className="ui-bottom-h2-p">
              <div>
                <h2>THE DETAILS</h2>
                <p>
                  <span className="bold-text">
                    I designed the icons and created the inbox layout
                  </span>{" "}
                  based directly off a sketch that was provided.
                </p>
              </div>
            </div>
            {/* <div>
              <button className="primary-button">See more details</button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="email-design-container">
        {" "}
        <div className="email-top">
          <h1>EMAIL + DESIGN</h1>
        </div>
        <div className="email-mid">
          <div className="email-mockup-container">
            <p>EMAIL ENTRY</p>
            <img src="email-entry.png" alt="email-design" />
          </div>
          <div className="email-mockup-container">
            {" "}
            <p>FIRST SCROLL</p>
            <img src="email-first-scroll.png" alt="email-design" />
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

      <div className="booklet-design-home-container">
        <div className="booklet-design-top">
          <h1>
            BOOKLET
            <br />
            DESIGN
          </h1>
          <Link
            to="/booklet-design"
            activeClassName="active"
            className="nav-link"
          >
            <div>
              <button className="primary-button">See the details</button>
            </div>
          </Link>
        </div>
        <div className="booklet-imgs-home">
          <div className="booklet-imgs-row-1">
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-1.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            >
              {/* <img src="print-design-booklet-1.png" alt="booklet design" /> */}
            </div>
            <div
              className="booklet-role-home"
              style={{
                width: "45.867rem",
                height: "35.0rem",
              }}
            >
              {" "}
              <div className="role-h2-p">
                <h2>Role</h2>
                <p>Designer</p>
              </div>
            </div>
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-2.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            >
              {/* <img src="print-design-booklet-2.png" alt="booklet design" /> */}
            </div>
          </div>
          <div className="booklet-imgs-row-2">
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-3.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            ></div>
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-4.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            ></div>
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-5.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            ></div>
          </div>
          <div className="booklet-imgs-row-3">
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-6.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            ></div>
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-7.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            ></div>
            <div
              style={{
                background: `url('${process.env.PUBLIC_URL}/print-design-booklet-8.png')`,
                backgroundRepeat: "no-repeat",
                width: "45.867rem",
                height: "35.0rem",
              }}
            ></div>
          </div>{" "}
        </div>
      </div>

      <div className="the-artist-container">
        <div className="made-in">
          <p>MADE ON PAPER</p>
        </div>
        <div className="the-artist-content">
          <div className="the-artist-left">
            <div className="the-artist-left-content">
              <h1>The Artist.</h1>
              {/* <div>
                <button className="primary-button">See more</button>
              </div> */}
            </div>
          </div>
          <div className="the-artist-right">
            <div className="the-artist-right-a">
              <img
                src="eye-drawing-3.png"
                alt="eye drawing"
                style={{
                  width: "27.4rem",
                  height: "39.3rem",
                }}
              />
              <h2>Analog Drawing.</h2>
            </div>
            <div className="the-artist-right-b">
              <img
                src="eye-leaves-4.png"
                alt="eye drawing"
                style={{
                  width: "24.5rem",
                  height: "34.8rem",
                }}
              />
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="digital-illu-container">
        <p className="made-in">MADE IN ADOBE ILLUSTRATOR</p>
        <div className="digital-illu-content">
          <div className="home-illu-left">
            <div>
              <img
                className="digital-illu-img-1"
                src="hands-pink-art-1.png"
                style={{
                  width: "30.5rem",
                  height: "41.9rem",
                }}
              />
            </div>
            <div className="digital-illu-right-imgs">
              <img
                className="digital-illu-img-2"
                src="fancy-sketch-bw.png"
                style={{
                  width: "27.5rem",
                  height: "19.5rem",
                }}
              />
              <img
                className="digital-illu-img-3"
                src="fancy-sketch-color.png"
                style={{
                  width: "27.5rem",
                  height: "19.5rem",
                }}
              />
            </div>
          </div>
          <div className="digital-illu-right">
            <div className="digital-illu-right-content">
              <h1>Digital Illustrator</h1>
              {/* <button className="primary-button">See more</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="portait-artist-container">
        <div className="pa-content">
          <div className="pa-top-bottom">
            <div className="pa-top">
              {/* <p className="made-in">MADE ON PAPER</p> */}
            </div>
            <div className="pa-bottom">
              <div className="pa-left-content">
                <div className="pa-h1-p">
                  <h1>
                    Portrait <br />
                    Artist
                  </h1>
                  <p>
                    Here is one that I enjoyed drawing, although it is quite
                    emotional. I followed Ruben Belloso Adorna’s work and wanted
                    to make my own version of his.
                  </p>
                </div>
                {/* <div>
                  <button className="primary-button">
                    See this portrait up close
                  </button>
                </div> */}
              </div>
              <div className="pa-right">
                <img
                  src="man-face-gallery-2.png"
                  alt="portrait drawing process"
                  // style={{
                  //   width: "52.8rem",
                  //   height: "45.8rem",
                  // }}
                />
              </div>
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
