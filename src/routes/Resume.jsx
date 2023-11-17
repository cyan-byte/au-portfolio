import React from "react";
import resumePDF from "./Alisha-Upton-Front-End-Resume.pdf";
import EmailButton from "../components/EmailButton";

export default function Resume() {
  return (
    <a href={resumePDF} download="Alisha-Upton-Front-End-Resume.pdf">
      <EmailButton />
    </a>
  );
}
