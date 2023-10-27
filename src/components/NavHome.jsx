import React from "react";
import { Link } from "react-router-dom";

export default function NavHome() {
  return (
    <div className="nav-home">
      <div className="name-logo">ALISHA</div>
      <div>
        <ul>
          <div className="current-page">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <div className="page-indicator-bar"></div>
          </div>
          <li>
            <Link to="/uxquiz">UX/UI DESIGN QUIZ</Link>
          </li>
          <li>
            <Link to="/asldictionary">ASL DICTIONARY APP</Link>
          </li>
          <li>
            <Link to="/artisanstore">ARTISAN SHOP</Link>
          </li>
          <li>
            <Link to="/aboutme">ABOUT ME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
