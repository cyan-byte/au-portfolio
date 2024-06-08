import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function () {
  return (
    <div className="about-container">
      <Nav />
      <div className="who-am-i-container">
        <div
          className="who-am-i"
          style={{
            background: `url('${process.env.PUBLIC_URL}/who-am-i-bg.png')`,
            backgroundRepeat: "no-repeat",
            width: "48rem",
            height: "47.8rem",
          }}
        >
          <h1>WHO AM I?</h1>
        </div>
        <img src="about-me-lottie.gif" alt="about me animation" />
      </div>

      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-left">
            <h1>I'M ALISHA</h1>
            <div className="about-paragraphs">
              <p>
                A <span className="bold-text">digital designer</span> with
                knowledge of{" "}
                <span className="bold-text">front-end development</span>. I
                enjoy the world of design; the principles help me to dive into
                creativity, but with a structure that just makes sense.
              </p>{" "}
              <p>
                {" "}
                With interest in design and some development, I completed an
                intensive software engineering bootcamp where I learned more{" "}
                <span>HTML</span>, <span className="bold-text">CSS</span>, and
                some <span className="bold-text">React</span> too.{" "}
              </p>
              <p>
                This has helped me to turn my own{" "}
                <span className="bold-text">Figma</span> designs into actual
                code and because it’s all front-end, I get to stay on the
                creative side of things when going into development.
              </p>
            </div>
          </div>
          <div className="about-me-right">
            <img src="about-me-image.png" alt="designer image" />
          </div>
        </div>
      </div>

      <div className="art-and-design-container">
        <div className="ad-left">
          <h1>Oh, The Multi-Faceted World Of Art & Design</h1>
        </div>
        <div className="ad-right">
          <p>
            Being a <span className="bold-text pink">digital designer</span>{" "}
            gives me the opportunity to create projects in multiple areas:
            layout design, branding, web design, etcetera. If you’re one who
            works on multiple projects . . .
          </p>
          <p className="i-know-that-world">I know that world.</p>
          <div>
            <h2 className=" art-design pink">ART & DESIGN</h2>
            <p>
              Whether it&apos;s digital design, jewelry-making, or portrait
              drawing, I enjoy them professionally and personally.
            </p>
          </div>
        </div>
      </div>

      <div className="branding-home-container">
        <p>
          While working with a design agency owner, I developed an interest in{" "}
          <span className="bold-text pink">branding</span>; it is fun to go
          through the process and see each puzzle piece as a whole.
        </p>
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
