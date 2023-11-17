import React from "react";

export default function ProjectThreeHome() {
  return (
    <div
      className="project-three-home"
      style={{
        backgroundImage: "url(asl-app-mockup.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "1100px",
      }}
    >
      <p
        className="project3-text"
        style={{
          color: "#322F32",
          fontSize: "3.2rem",
          fontWeight: "400",
          letterSpacing: "2.56px",
          paddingTop: "156px",
          paddingLeft: "156px",
        }}
      >
        PROJECT 3
      </p>
      <div className="project-three-home-text">
        <div className="project-three-paragraphs">
          <p className="small-caps3">LEARNING</p>
          <h2>
            <a
              href="https://cyan-byte.github.io/asl-react-dictionary/"
              target="_blank"
            >
              Sign Language App
            </a>
          </h2>
          <p>
            This project is a sign language dictionary that allows users to type
            a word and see its interpretation through a GIF.
          </p>
          <p>
            This app fetches data from the
            <span className="bold-text"> Giphy API</span>, pulling from one
            Giphy user's channel (@signwithrobert).
          </p>
          <p>
            Try to learn some signs{" "}
            <a
              className="dark-link"
              href="https://cyan-byte.github.io/asl-react-dictionary/"
              target="_blank"
            >
              here <img src="/next-page-icon-black.png" alt="next page icon" />
            </a>
          </p>

          <p>
            {" "}
            <a
              className="dark-link"
              href="https://github.com/cyan-byte/asl-react-dictionary"
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
