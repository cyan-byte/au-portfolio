import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function BookletDesign() {
  return (
    <div
      className="booklet-design-container"
      style={{
        background: `url('${process.env.PUBLIC_URL}/pexels-ian-panelo-7116587.jpg')`,
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <div className="booklet-container2">
        <div className="booklet-design-header">
          <h1>booklet</h1>
          <p>+</p>
          <h1>design</h1>
        </div>
        <div className="cover-and-list">
          <img
            className="booklet-cover"
            src="print-layout/print-design-booklet-a.png"
            alt="booklet design cover"
          />
          <ul>
            <li>
              <span className="bold-text">layout</span> + design
            </li>
            <li>
              <span className="bold-text">book</span> + design
            </li>
            <li>
              <span className="bold-text">color</span> + theory
            </li>
            <li>
              <span className="bold-text">type</span>setting
            </li>
          </ul>
        </div>
        <div className="booklet-design-brief-container">
          <div className="design-brief-header">
            <h1>DESIGN BRIEF.</h1>
          </div>
          <div className="design-brief-info">
            <div className="task-container">
              <h2>TASK</h2>
              <p>
                Design a booklet using the following article:{" "}
                <a href="https://www.nytimes.com/newsgraphics/2013/10/27/south-china-sea/index.html">
                  South China Sea
                </a>
              </p>
            </div>
            <div>
              <h2>ROLE</h2>
              <p>Sole Designer</p>
            </div>
            <div>
              <h2>TOOLS</h2>
              <p>Adobe InDesign </p>
            </div>{" "}
          </div>
        </div>
        <div>
          <div className="booklet-instructions-1">
            <p>"Take this article with its images and design a booklet."</p>
            <p>"Oh, and use Adobe Indesign."</p>
          </div>
          <div className="response">
            <p>I'm on it.</p>
          </div>
          <div className="imgs-b-d">
            <img
              src="print-layout/print-design-booklet-b.png"
              alt="booklet design"
              style={{ width: "50%", height: "38.5rem" }}
            />
            <img
              src="print-layout/print-design-booklet-d.png"
              alt="booklet design"
              style={{ width: "50%", height: "38.5rem" }}
            />
          </div>
          <div className="booklet-instructions-2">
            {" "}
            <p className="type-rules">
              "& don't forget the rules of typesetting."
            </p>
          </div>
          <div className="response">
            <p>Absolutely.</p>
          </div>
          <div className="imgs-e-g-j">
            <img
              src="print-layout/print-design-booklet-e.png"
              alt="booklet design"
              style={{ width: "33.3%", height: "32rem" }}
            />
            <img
              src="print-layout/print-design-booklet-g.png"
              alt="booklet design"
              style={{ width: "33.3%", height: "32rem" }}
            />
            <img
              src="print-layout/print-design-booklet-j.png"
              alt="booklet design"
              style={{ width: "33.3%", height: "32rem" }}
            />
          </div>
          <div className="imgs-k">
            <img
              src="print-layout/print-design-booklet-k.png"
              alt="booklet design"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="imgs-l-m">
            <img
              src="print-layout/print-design-booklet-l.png"
              alt="booklet design"
              style={{ width: "50%", height: "auto" }}
            />
            <img
              src="print-layout/print-design-booklet-m.png"
              alt="booklet design"
              style={{ width: "49%", height: "auto" }}
            />
          </div>
          <div className="box-rows">
            <div className="box-row">
              <div>
                <img src="tick-box.png" alt="tick box" />
              </div>
              <div>
                <p>No more than two hyphena-ted words per paragraph?</p>
              </div>
            </div>
            <div className="box-row">
              <div>
                <img src="tick-box.png" alt="tick box" />
              </div>
              <div>
                <p>Widow & orphan check?</p>
              </div>
            </div>
            <div className="box-row">
              <div>
                <img src="tick-box.png" alt="tick box" />
              </div>
              <div>
                <p>No rivers? </p>
              </div>
            </div>
          </div>
          <div className="smile">
            <p>{":)"} </p>
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
      </div>
      <Footer />
    </div>
  );
}
