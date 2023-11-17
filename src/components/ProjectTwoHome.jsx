import React from "react";

export default function ProjectTwoHome() {
  return (
    <div className="project-two">
      <p
        style={{
          color: "#322F32",
          fontSize: "3.2rem",
          fontWeight: "400",
          letterSpacing: "2.56px",
          paddingTop: "96px",
          paddingLeft: "156px",
        }}
      >
        PROJECT 2
      </p>

      <div className="project-two-image-and-p">
        <img src="ux-menu-pg1.png" alt="monitor mockup" />
        <div className="project-two-paragraphs">
          <p className="small-caps2">EDUCATION</p>
          <h2>UX/UI Quiz Game</h2>
          <p>
            While studying UX/UI design, I tried finding a way to test myself on
            the new concepts. But after searching for an existing game and not
            finding it, I decided to create one.
          </p>

          <p>
            GitHub repo{" "}
            <img src="/next-page-icon-black.png" alt="next page icon" />
          </p>
          <p>
            The goal is to tie with the omniscient computer or not answer
            more than two questions incorrectly.
          </p>
          <p>
            Try to reach the final round here{" "}
            <img src="/next-page-icon-black.png" alt="next page icon" />
          </p>
        </div>
      </div>
    </div>
  );
}
