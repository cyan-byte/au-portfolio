import React from "react";

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
        <li>work</li>
        <li>resume</li>
        <li>who am I?</li>
      </ul>
      <p>
        Designed by <span className="small-caps1"> Alisha Upton</span>
      </p>
    </div>
  );
}
