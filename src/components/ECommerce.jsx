import React from "react";

export default function ECommerce() {
  return (
    <div className="e-commerce">
      <p className="small-caps1">WHAT IS IT?</p>
      <div className="e-commerce-cards-container">
        <div className="e-commerce-card">
          <h2>Mock E-Commerce Site</h2>
          <p>
            The following is a glimpse of the{" "}
            <span className="bold-text">UI </span> for a mock e-commerce store
            designed with <span className="bold-text">Figma</span>. It's a
            pottery shipping web app built with{" "}
            <span className="bold-text">React</span> under the hood.
          </p>
          <a
            href="https://modern-e-commerce-store-front-end-1-1.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="button-container lets-go-1">
              <button>LET'S GO</button>
            </div>{" "}
          </a>
        </div>
        <section className="e-commerce-card">
          <h2>Full-stack</h2>
          <p>
            It's an in-progress project, but once it's complete, it will be a
            full-stack <span className="bold-text">MERN </span> app with{" "}
            <span className="bold-text">CRUD</span> functionality for creating,
            updating, and deleting items from the cart component.{" "}
            <p className="bold-text">See it in the midst of development.</p>
          </p>
          <a
            href="https://modern-e-commerce-store-front-end-1-1.onrender.com/"
            target="_blank" rel="noreferrer"
          >
            <div className="button-container">
              <button>LET'S GO</button>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
