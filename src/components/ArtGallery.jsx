import React from "react";

export default function ArtGallery() {
  return (
    <div
      className="art-gallery"
      style={{
        backgroundImage: "url(art-gallery.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "951px",
      }}
    >
      <p className="small-caps4">FUN FACT</p>
      <p>
        I enjoy drawing by hand <br />
        in my free time.
      </p>
    </div>
  );
}
