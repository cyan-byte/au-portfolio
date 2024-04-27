import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo font-face-pr">
        <Link to="/">Alisha</Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <a href="mailto:aliau2050@gmail.com">
            <li className="contact-button">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
