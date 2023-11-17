import React from "react";
import { Link } from "react-router-dom";

export default function NavHome() {
  return (
    <nav>
      <img src="./alishaLogo.png" />
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/moreprojects">more projects</Link>
        </li>
        <li>
          <Link to="/about">about</Link></li>
      </ul>
    </nav>
  );
}
