import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <ul>
          <li>
            <Link to="/">
              <p className="footer-logo">AU</p>
            </Link>
          </li>
        </ul>
        <ul className="social-icons">
          <a
            href="https://www.linkedin.com/in/alishaupton"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <img src="linkedin-icon.png" alt="LinkedIn icon" />
            </li>
          </a>
          <a
            href="https://www.github.com/cyan-byte"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <img src="github-icon.png" alt="GitHub icon" />
            </li>
          </a>
        </ul>
        <ul className="footer-nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="mailto: aliau2050@gmail.com">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-right">
        <p>Site designed by Alisha Upton</p>
        <p>Copyright &copy; 2024</p>
      </div>
    </div>
  );
}
