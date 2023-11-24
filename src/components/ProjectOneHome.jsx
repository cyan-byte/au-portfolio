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
          <p
            className="project-one-text"
            style={{
              color: "#322F32",
              fontSize: "3.2rem",
              fontWeight: "400",
              letterSpacing: "2.56px",
            }}
          >
            PROJECT 1
          </p>
          <div className="text-arrows">
            <a
              href="https://github.com/cyan-byte/modern-e-commerce-store-front-end/tree/master"
              target="_blank"
            >
              <div className="text-and-next-arrow">
                Front-end Repo
                <img
                  src="next-page-icon-black.png"
                  alt="next page icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
              </div>
            </a>
            <a
              href="https://github.com/cyan-byte/modern-e-commerce-store-back-end"
              target="_blank"
            >
              <div className="text-and-next-arrow2">
                Back-end Repo
                <img
                  src="next-page-icon-black.png"
                  alt="next page icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="small-text">
          <p>(in progress)</p>
        </div>
      </div>
    </div>
  );
}
