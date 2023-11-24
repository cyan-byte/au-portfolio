import React from "react";

export default function ProjectTwoHome() {
  return (
    <div className="project-two">
      <p className="project-two-text">PROJECT 2</p>
      <div className="ux-cards-container">
        <div className="ux-card">
          <h2>UX/UI Quiz Game</h2>
          <img src="ux-menu-pg1.png" alt="UI design on a monitor" />
          <div className="button-container">
            <button>GITHUB REPO</button>
          </div>{" "}
        </div>
        <section className="ux-card">
          <h2>Test Your Skills</h2>
          <p>
            I tried to find a way to test the concepts of UX/UI design, but
            after searching for an existing game and not finding it, I decided
            to create one.
          </p>
          <p>
            Object: Tie with the omniscient computer or answer no more than two
            questions incorrectly.
          </p>
          <div className="button-container">
            <button>PLAY</button>
          </div>
        </section>
      </div>
    </div>
  );
}
