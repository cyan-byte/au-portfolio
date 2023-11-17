import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <img
        src="alishaLogoMini.png"
        alt="logo"
        style={{
          width: "84px",
          height: "35px",
        }}
      />
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/moreprojects">more projects</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <p>
        Designed by <span className="small-caps1"> Alisha Upton</span>
      </p>
    </div>
  );
}
