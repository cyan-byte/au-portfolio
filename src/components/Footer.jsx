import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/about">
        <img
          src="alishaLogoMini.png"
          alt="logo"
          style={{
            width: "84px",
            height: "35px",
          }}
        />
      </Link>
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
        Designed by{" "}
        <Link to="/about">
          <span className="small-caps1"> Alisha Upton</span>
        </Link>
      </p>
    </div>
  );
}
