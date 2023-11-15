import React from "react";

export default function ProjectOneHome() {
  return (
    <div
      style={{
        backgroundImage: "url(laptop-stairs-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "1100px",
      }}
    >
      <div className="project-one-home-text">
        <div>
          <p
            className="project-one-home"
            style={{
              color: "#322F32",
              fontSize: "3.2rem",
              fontWeight: "400",
              letterSpacing: "2.56px",
              paddingTop: "156px",
              paddingLeft: "156px",
            }}
          >
            PROJECT 1
          </p>
        </div>
        <div className="project-one-paragraphs">
          <p className="small-caps1">WHAT IS IT?</p>
          <h2>E-Commerce Mock Store</h2>
          <p>
            This is a glimpse of the <span className="bold-text">UI</span> for a
            mock e-commerce store designed with
            <span className="bold-text"> Figma</span>. It’s an artisan shopping
            app built with <span className="bold-text">React</span> under the
            hood. It’s an in-progress project, but once it’s complete, it will
            be a full-stack <span className="bold-text">MERN</span> app w/{" "}
            <span className="bold-text">CRUD</span> functionality for creating,
            updating, and deleting items from the cart component. Check back in
            and stay tuned.
          </p>
          <p>
            See it in development here{" "}
            <img src="/next-page-icon-white.png" alt="next page icon" />
          </p>

          <p>
            Front-end repo{" "}
            <img src="/next-page-icon-white.png" alt="next page icon" />
            <br />
            Back-end repo{" "}
            <img src="/next-page-icon-white.png" alt="next page icon" />
          </p>
          <p className="in-progress-text">(in progress)</p>
          <p className="black-2023">2023</p>
        </div>
      </div>
    </div>
  );
}
