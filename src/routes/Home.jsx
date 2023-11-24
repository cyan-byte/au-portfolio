import React from "react";
import ProjectOneHome from "../components/ProjectOneHome";
import HomeGreeting from "../components/HomeGreeting";
import TalonUI from "../components/TalonUI";
import ProjectTwoHome from "../components/ProjectTwoHome";
import ProjectThreeHome from "../components/ProjectThreeHome";
import ArtGallery from "../components/ArtGallery";
import ECommerce from "../components/ECommerce";

export default function Work() {
  return (
    <div className="work font-link1">
      <HomeGreeting />
      <ProjectOneHome />
      <ECommerce />
      <TalonUI />
      <ProjectTwoHome />
      <ProjectThreeHome />
      <ArtGallery />
    </div>
  );
}
