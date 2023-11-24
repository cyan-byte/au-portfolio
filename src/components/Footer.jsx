import React from "react";
import { Link } from "react-router-dom";
import EmailButton from "./EmailButton";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/about">
        <img src="alishaLogoMini.png" alt="logo" />
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
        <Link to="/about">Alisha Upton</Link>
      </p>
      <EmailButton />
    </div>
  );
}
