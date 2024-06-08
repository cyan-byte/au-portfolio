import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function BookletDesign() {
  return (
    <div className="booklet-design-container">
        <Nav/>
      <div className="booklet-design-header">
        <p>booklet</p>
        <p>+</p>
        <p>design</p>
      </div>
      <div className="cover-and-list">
        <img src="print-design-booklet-1a.png" alt="booklet design cover" />
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
      <h1 className="booklet-design-brief-container">DESIGN BRIEF.</h1>
      <div>
        <h2>TASK</h2>
        <p>Design a booklet from this article:</p>
        <p>
          https://www.nytimes.com/newsgraphics/2013/10/27/south-china-sea/index.html
        </p>
      </div>
      <div>
        <h2>ROLE</h2>
        <p>Sole Designer</p>
      </div>
      <div>
        <h2>TOOLS</h2>
        <p>Adobe InDesign </p>
      </div>
      <div className="booklet-instructions">
        <p>"TAKE THIS ARTICLE WITH ITS IMAGES AND DESIGN A BOOKLET"</p>
        <p>"OH, AND USE ADOBE INDESIGN."</p>
      </div>
      <div className="response">I'm on it!</div>
      <div className="imgs-1-2a">
        <img src="print-design-booklet-0.png" alt="booklet design" />
        <img src="print-design-booklet-2a.png" alt="booklet design" />
      </div>
      <div>
        {" "}
        <p>"& DON'T FORGET THE RULES OF TYPESETTING."</p>
      </div>
      <div className="imgs-3-4-5a">
        <img src="print-design-booklet-3.png" alt="booklet design" />
        <img src="print-design-booklet-4.png" alt="booklet design" />
        <img src="print-design-booklet-5a.png" alt="booklet design" />
      </div>
      <div className="img-6">
        <img src="print-design-booklet-6.png" alt="booklet design" />
      </div>
      <div className="imgs-7-8">
        <img src="print-design-booklet-7.png" alt="booklet design" />
        <img src="print-design-booklet-8.png" alt="booklet design" />
      </div>
      <div>
        <img src="tick-box.png" alt="tick box" />
        <p>
          NO MORE THAN TWO HYPHENA-
          <br />
          TED WORDS PER PARA-
          <br />
          GRAPH?
        </p>
      </div>
      <div>
        <img src="tick-box.png" alt="tick box" />
        <p>WIDOW & ORPHAN CHECK?</p>
      </div>
      <div>
        <img src="tick-box.png" alt="tick box" />
        <p>NO RIVERS? </p>
      </div>
      <div className="tick-box-container">
        <img src="tick-box.png" alt="tick box" />
        <p>:) </p>
      </div>
      <Footer/>
    </div>
  );
}
