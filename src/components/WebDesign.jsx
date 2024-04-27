import React from "react";

export default function WebDesign() {
  return (
    <div className="web-design">
      <div className="web-design-left">
        <a
          href="https://bit.ly/trulywebdesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="truly-scroll-animation.png"
            alt="homepage-mockup"
            className="truly-animation"
          />
        </a>
      </div>
      <div className="web-design-right">
        <div className="web-design-text">
          <h2>WEB DESIGN</h2>
          <p>This is a full concept design for a handmade pottery shop.</p>
          <p>
            FEATURES:
            <ul>
              <li>Product page</li> <li>Product details page</li>
              <li>Cart design</li>
              <li>Artisan bio page</li>
            </ul>
          </p>
          <p>
            This is the homepage. Click the design to see the{" "}
            <span className="bold-body-text">Figma prototype</span> in full
            effect.
          </p>
        </div>
        <a href="mailto:aliau2050@gmail.com">
          <div className="cta-button">Design my site</div>
        </a>
      </div>
    </div>
  );
}
