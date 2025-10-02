import React from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MassTimesSection from "@/components/sections/MassTimesSection";
import AboutSection from "@/components/sections/AboutSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import SacramentsSection from "@/components/sections/SacramentsSection";
import MinistriesSection from "@/components/sections/MinistriesSection";
import EventsSection from "@/components/sections/EventsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Holy Trinity Parish - About Our Parish",
};

export default function ParishView() {
  return (
    <>
      <main>
        <Header />
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <MassTimesSection />
        <AboutSection />
        <LeadershipSection />
        <SacramentsSection />
        <MinistriesSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
        <Footer />
        <div className="back-to-top" id="backToTop">
          <i className="fas fa-arrow-up"></i>
        </div>
      </main>
    </>
  );
}
