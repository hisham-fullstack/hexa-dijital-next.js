"use client";
import React from "react";
import Hero from "./Hero/Hero";
import Servicess from "./Servicess/Servicess";
import Approach from "./Approach/Approach";
import SectoralPanel from "./SectoralPanel/SectoralPanel";
import LatestWork from "./LatestWork/LatestWork";
import AboutUs from "./AboutUs/AboutUs";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Servicess />
      <Approach />
      <SectoralPanel />
      <LatestWork />
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default Home;
