import React from "react";
import Nav from "./Nav";

export default function PortraitArtist() {
  return (
    <div
      className="portrait-artist"
      style={{
        background: `url('${process.env.PUBLIC_URL}/pexels-ian-panelo-7116587.jpg')`,
        backgroundRepeat: "repeat",
      }}
    >
      <Nav />
      PortraitArtist
    </div>
  );
}
