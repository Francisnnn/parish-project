import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import MainNavigation from "../../components/layout/MainNavigation";
import HeroSection from "../../components/sections/HeroSection";
import AnnouncementsSection from "../../components/sections/AnnouncementsSection";
import LeadershipSection from "../../components/sections/LeadershipSection";

export default function HomePage() {
  return (
    <Layout>
      {/* Header */}
      <header>
        <div className="container header-content">
          <div className="logo-container">
            <div className="logo-group">
              <div className="logo">
                <Image
                  src="/img/Archdoicese of Ibadan logo.jpg"
                  alt="Archdiocese Logo"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className="logo">
                <Image
                  src="/img/trinity logo.jpeg"
                  alt="Trinity Logo"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </div>
            <div className="title-group">
              <h1>Holy Trinity Catholic Church</h1>
              <h2>Aba-Panu Apata, Ibadan, Nigeria</h2>
              <p>Archdiocese of Ibadan</p>
            </div>
          </div>
          <button
            className="menu-toggle"
            id="menu-toggle"
            aria-label="Toggle navigation menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <MainNavigation />

      <main>
        <HeroSection />
        <AnnouncementsSection />
        <LeadershipSection />
      </main>
    </Layout>
  );
}
