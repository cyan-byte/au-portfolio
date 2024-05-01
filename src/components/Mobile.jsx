import React from "react";

export default function Mobile() {
  return (
    <div className="mobile">
      <div className="mobile-left">
        <img src="cleanup-event-screen1.png" alt="App design" />
        <img src="cleanup-event-screen2.png" alt="App design" />
      </div>
      <div className="mobile-right">
        <div className="mobile-text">
        <h2>MOBILE DESIGN</h2>
        <p>
          I designed an Event Details Screen for an app that helps people find
          and sign up for volunteer events.
        </p>
        <p>
          With insights from <strong>user research</strong>, this design came to
          life from sketches to high fidelity mockups.
        </p>
        </div>
        <a href="mailto:aliau2050@gmail.com">
          <div className="mobile-button">Design my app</div>
        </a>{" "}
      </div>
    </div>
  );
}
