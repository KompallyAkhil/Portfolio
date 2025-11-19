import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="min-h-screen bg-neo-bg font-sans text-neo-dark selection:bg-neo-main selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}


export default App;
