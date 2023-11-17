import React from "react";
import { Link } from "react-router-dom";

export default function NavHome() {
  return (
    <nav>
      <img src="./alishaLogo.png" />
      <ul>
        <li>
          <Link to="/">work</Link>
        </li>
        <li>
          <Link to="/resume">resume</Link>
        </li>
        <li>
          <Link to="/whoami">who am I?</Link></li>
      </ul>
    </nav>
  );
}
