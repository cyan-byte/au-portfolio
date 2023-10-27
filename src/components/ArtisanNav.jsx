import React from "react";
import { Link } from "react-router-dom";

export default function ArtisanNav() {
  return (
    <div className="nav-home">
      <div className="name-logo">ALISHA</div>
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/uxquiz">UX/UI DESIGN QUIZ</Link>
          </li>
          <li>
            <Link to="/asldictionary">ASL DICTIONARY APP</Link>
          </li>
          <div className="current-page">
            <li>
              <Link to="/artisanstore">ARTISAN SHOP</Link>
            </li>
            <div className="page-indicator-bar"></div>
          </div>
          <li>
            <Link to="/aboutme">ABOUT ME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
