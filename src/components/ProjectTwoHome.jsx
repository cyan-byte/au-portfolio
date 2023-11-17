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
          <h2>
            <a
              href="https://cyan-byte.github.io/ux-design-game/index.html"
              target="_blank"
            >
              UX/UI Quiz Game
            </a>
          </h2>
          <p>
            While studying UX/UI design, I tried finding a way to test myself on
            the new concepts. But after searching for an existing game and not
            finding it, I decided to create one.
          </p>

          <p>The goal is to tie with the totally omniscient computer.</p>
          <p>
            Try to reach the final round{" "}
            <a
              className="dark-link"
              href="https://cyan-byte.github.io/ux-design-game/index.html"
              target="_blank"
            >
              here
            </a>{" "}
            <img src="/next-page-icon-black.png" alt="next page icon" />
          </p>
          <p>
            <a
              className="dark-link"
              href="https://github.com/cyan-byte/ux-design-game"
              target="_blank"
            >
              GitHub repo{" "}
              <img src="/next-page-icon-black.png" alt="next page icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
