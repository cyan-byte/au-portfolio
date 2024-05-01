import React from "react";

export default function EmailDesign() {
  return (
    <div className="email-design-container">
      <div className="email-design-left">
        <div className="email-text">
          <h2>EMAIL DESIGN</h2>
          <p>
            A MicroTask for Acadium marketing. This design is meant to introduce
            a new Certified Organic Collection.
          </p>
          <p>
            I incorporated{" "}
            <span className="bold-body-text">email design best practices</span>{" "}
            for header size, placement of the most important information, using
            text to convey messages, layout, design principles, and more.
          </p>
        </div>
        <a href="mailto:aliau2050@gmail.com">
          <button className="email-cta">Design my emails</button>
        </a>{" "}
      </div>
      <div className="email-design-right">
        <img src="email-design1.png" alt="email marketing design" />
        <img src="email-design2.png" alt="email marketing design" />
      </div>
    </div>
  );
}
