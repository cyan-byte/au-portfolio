import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <div>
          <li>
            <Link to="/">
              <img src="footer-logo.png" alt="logo" className="footer-logo" />
            </Link>
          </li>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/alishaupton"
            target="_blank"
            rel="noreferrer"
          >
            <img src="linkedin-icon.png" alt="LinkedIn icon" />
          </a>
          <a
            href="https://www.github.com/cyan-byte"
            target="_blank"
            rel="noreferrer"
          >
            <img src="github-icon.png" alt="GitHub icon" />
          </a>
        </div>
        <div className="footer-nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="mailto: aliau2050@gmail.com">Contact</a>
          </li>
        </div>
      </ul>
      <div className="site-info">
        <p>Site designed by Alisha Upton</p>
      </div>
    </div>
  );
}
