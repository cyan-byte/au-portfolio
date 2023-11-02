import React from "react";
import ArtisanNav from "../components/ArtisanNav";

export default function ArtisanStore() {
  return (
    <div className="artisan-container">
      <ArtisanNav />
      <h1>Artisan Store App</h1>
      <div>
        <p>
          Here is Talon, my e-commerce store app made with MERN infrastructure.
        </p>

        <p>
          It's currently being constructed and will have CRUD operations via a
          cart component for adding, updating, and removing items. Check out
          this screenshot of the homepage:
          <br />
          <img
            src="screenshot1.png"
            alt="talon homepage"
            className="artisan-page-image-1"
          />
        </p>
        <p>
          GitHub Repo for{" "}
          <a href="https://github.com/cyan-byte/modern-e-commerce-store-front-end/tree/master">
            Font-End:
          </a>
        </p>
        <p>
          GitHub Repo for{" "}
          <a href="https://github.com/cyan-byte/modern-e-commerce-store-back-end">
            Back-End
          </a>
        </p>
      </div>
    </div>
  );
}
