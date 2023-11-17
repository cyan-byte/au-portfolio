import React from "react";
import { Link } from "react-router-dom";

export default function WorkGreeting() {
  return (
    <div className="work-greeting">
      <Link to="/about">
        <img
          src="lisha_avatar3.png"
          alt="avatar"
          style={{ width: "200px", height: "200px" }}
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
