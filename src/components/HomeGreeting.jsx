import React from "react";
import { Link } from "react-router-dom";

export default function HomeGreeting() {
  return (
    <div className="home-greeting">
      <Link to="/about">
        <img
          src="alisha1.2.png"
          alt="avatar"
          style={{ width: "200px", height: "200px", borderRadius: "40px" }}
        />
      </Link>
      <div>
        <p>I'm Alisha Upton</p>
        <p className="greeting">
          <span class="bold-text">Web developer</span>, specializing in{" "}
          <span class="bold-text">front-end</span> and{" "}
          <span class="bold-text">digital design</span>
        </p>
      </div>
    </div>
  );
}
