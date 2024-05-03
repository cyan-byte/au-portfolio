import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div>
        <NavLink exact to="/">
          <img src="au-logo.png" alt="logo" className="logo" />
        </NavLink>
      </div>
      <div className="links">
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName="active" className="nav-link">
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <div>
              <a href="mailto:email@gmail.com">
                <button className="contact-button">Contact</button>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
