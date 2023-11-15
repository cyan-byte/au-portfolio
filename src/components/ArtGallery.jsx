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
      <div className="art-paragraphs">
        <p className="small-caps4">FUN FACT</p>
        <p className="art-sentence">
          I enjoy drawing by hand <br />
          in my free time.
        </p>
      </div>
      <p className="last-sentence">
        I appreciate a good, honest, direct critique. It would be great <br />
        if you expressed what you thought about this portfolio site.
      </p>
    </div>
  );
}
