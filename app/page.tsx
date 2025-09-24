"use client";

import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";

const sectionStyle = "min-h-screen dotted-background bg-dark border-b border-white/10 "

export default function Home() {
  return (
    <main>
      <section id="navbar" className="fixed w-full z-10">
        <Navbar />
      </section>
      
      {/* Section Home */}
      <section id="home" className={sectionStyle}>
        <HomeSection />
      </section>
      {/* Section About */}
      <section id="about" className="min-h-screen dotted-background bg-light p-8 border-b border-white/10">
        <AboutSection />
      </section>

      {/* Section Contact */}
      <section id="projects" className="min-h-screen dotted-background bg-dark p-8 border-b border-white/10">
        <ProjectsSection />
      </section>
      <section id="resume" className="min-h-screen dotted-background bg-light p-8">
        <ResumeSection />
      </section>
      <section id="interests" className="min-h-screen dotted-background bg-dark p-8">
        <InterestsSection />
      </section>
    </main>
  );
}
