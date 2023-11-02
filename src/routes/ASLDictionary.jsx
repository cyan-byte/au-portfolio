import React from "react";
import ASLNav from "../components/ASLNav";

export default function ASLDictionary() {
  return (
    <div className="asl-container">
      <ASLNav />
      <p>
        <a
          href="https://cyan-byte.github.io/asl-react-dictionary/"
          target="_blank"
        >
          ASL Dictionary
        </a>
      </p>
      <p>
        <a
          href="https://github.com/cyan-byte/asl-react-dictionary"
          target="_blank"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  );
}
