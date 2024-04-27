import React from "react";

export default function Nav() {
  return (
    <div className="nav">
          <div className="logo font-face-pr">Alisha</div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <a href="mailto:aliau2050@gmail.com">
            <li className="contact-button">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
