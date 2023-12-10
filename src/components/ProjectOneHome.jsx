import React from "react";

export default function ProjectOneHome() {
  return (
    <div
      className="project-one-home"
      style={{
        backgroundImage: "url(laptop-stairs-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="project-one-home-text">
        <div>
          <p className="project-one-text">PROJECT 1</p>
          <div className="text-arrows">
            <div className="text-and-next-arrow">
              <a
                href="https://github.com/cyan-byte/modern-e-commerce-store-front-end/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                Front-end Repo
                <img
                  src="next-page-icon-black.png"
                  alt="next page icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
              </a>
            </div>
            <div className="text-and-next-arrow2">
              <a
                href="https://github.com/cyan-byte/modern-e-commerce-store-back-end"
                target="_blank"
                rel="noreferrer"
              >
                Back-end Repo
                <img
                  src="next-page-icon-black.png"
                  alt="next page icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
              </a>
            </div>{" "}
          </div>
        </div>
        <div className="small-text">
          <p>(in progress)</p>
        </div>
      </div>
    </div>
  );
}
