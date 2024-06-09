import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul className="logo-container">
        <li className="logo">
          <NavLink exact to="/">
            AU
          </NavLink>
        </li>
      </ul>
      <ul className="nav-links-container">
        <li>
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <a href="mailto:aliau2050@gmail.com" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
