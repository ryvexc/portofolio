'use client'

import Navbar from "@/components/mine/Navbar";
import About from "@/components/sections/About";
import AchievementsSection from "@/components/sections/Achievements";
import ContactSection from "@/components/sections/ContactMe";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/Skills";
import { useEffect } from "react";

// @ts-expect-error: there is no error here
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from "@/components/mine/Footer";
import SertificatesSection from "@/components/sections/Sertificates";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 750
    });
  }, []);

  return <>
    <Navbar />
    <About />

    <div className="flex justify-center">
      <div className="container">
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <SertificatesSection />
      </div>
    </div>

    <ContactSection />
    <Footer />
  </>
}
