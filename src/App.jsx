import React from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Sections/Hero";
import Stats from "./components/Sections/Stats";
import ProblemSolution from "./components/Sections/ProblemSolution";
import Features from "./components/Sections/Features";
import AppPreview from "./components/Sections/AppPreview";
import HowItWorks from "./components/Sections/HowItWorks";
import Benefits from "./components/Sections/Benefits";
import Download from "./components/Sections/Download";
import Team from "./components/Sections/Team";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <Stats />
      <ProblemSolution />
      <Features />
      <AppPreview />
      <HowItWorks />
      <Benefits />
      <Download />
      <Team />
      <Footer />
    </div>
  );
}
