import React from "react";
import ProjectOneHome from "../components/ProjectOneHome";
import WorkGreeting from "../components/WorkGreeting";
import TalonUI from "../components/TalonUI";
import ProjectTwoHome from "../components/ProjectTwoHome";
import ProjectThreeHome from "../components/ProjectThreeHome";
import ArtGallery from "../components/ArtGallery";

export default function Work() {
  return (
    <div className="work font-link1">
      <WorkGreeting />
      <ProjectOneHome />
      <TalonUI />
      <ProjectTwoHome />
      <ProjectThreeHome />
      <ArtGallery />
    </div>
  );
}
