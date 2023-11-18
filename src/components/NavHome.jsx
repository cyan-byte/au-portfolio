import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavHome() {
  return (
    <nav>
      <Link to="/about">
        <img src="./alishaLogo.png" />
      </Link>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active-link">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/moreprojects" activeClassName="active-link">
            more projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
