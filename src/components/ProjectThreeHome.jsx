import React from "react";

export default function ProjectThreeHome() {
  return (
    <div className="project-three-home">
      <div
        className="asl-left"
        style={{
          backgroundImage: "url(asl-app-mockup2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "50%",
        }}
      >
        <p className="project3-text">PROJECT 3</p>
        <div>
          <a
            href="https://github.com/cyan-byte/asl-react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-three-button">
              <button>GITHUB REPO</button>
            </div>
          </a>
        </div>
      </div>
      <div
        className="asl-right"
        style={{
          width: "50%",
          height: "100vh",
          backgroundColor: "#A59FED",
        }}
      >
        <div>
          <p className="small-caps2">LEARNING</p>
          <h2>Sign Language App</h2>
          <p>
            How does it work? Type in a word that you want to learn in American
            Sign Language and see a GIF interpretation.
          </p>
          <p>
            This app fetches data from the{" "}
            <span className="bold-text">Giphy API</span>, pulling from one Giphy
            user's channel (@signwithrobert).
          </p>
          <p>Try to learn some new signs.</p>
          <p>
            <a
              className="dark-link"
              href="https://github.com/cyan-byte/asl-react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo{" "}
              <img src="next-page-icon-black.png" alt="next arrow" />
            </a>
          </p>
          <a
            href="https://cyan-byte.github.io/asl-react-dictionary/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="button-container try-it">
              <button>TRY IT</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

/* <a
              href="https://cyan-byte.github.io/asl-react-dictionary/"
              target="_blank"
            >
              <button>Sign Language App</button>
            </a> */
