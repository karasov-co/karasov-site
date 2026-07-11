import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PainPointsSection from "./components/PainPointsSection";
import WorkSection from "./components/WorkSection";
import OfferSection from "./components/OfferSection";
import YourWorldSection from "./components/YourWorldSection";
import ProcessSection from "./components/ProcessSection";
import ToolsSection from "./components/ToolsSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import CursorGlow from "./components/CursorGlow";
import PageLoadOverlay from "./components/PageLoadOverlay";
import ScrollProgressBar from "./components/ScrollProgressBar";

function Divider() {
  return <div className="h-px bg-[#1A1A1A]" />;
}

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <PageLoadOverlay />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <PainPointsSection />
        <Divider />
        <WorkSection />
        <Divider />
        <OfferSection />
        <Divider />
        <YourWorldSection />
        <Divider />
        <ProcessSection />
        <Divider />
        <ToolsSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <FaqSection />
        <Divider />
        <ContactSection />
      </main>
    </>
  );
}
