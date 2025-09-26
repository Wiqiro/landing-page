import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { BottomSection } from "@/components/sections/BottomSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";

const sectionStyle = "dotted-background bg-dark border-b border-white/10 ";
const NAVBAR_HEIGHT = "56px";
const BOTTOM_SECTION_HEIGHT = "96px";

export const dynamic = "error";

export default async function Home() {
  return (
    <main>
      <section id="navbar" className="fixed w-full z-10">
        <Navbar />
      </section>

      {/* Section Home */}
      <section id="home" className={`${sectionStyle} min-h-screen`}>
        <HomeSection />
      </section>

      {/* Section About */}
      <section id="about" className="dotted-background bg-light p-8 border-b border-white/10" style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT})` }}>
        <AboutSection />
      </section>

      {/* Section Projects */}
      <section id="projects" className="dotted-background bg-dark p-8 border-b border-white/10" style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT})` }}>
        <ProjectsSection />
      </section>

      <section id="resume" className="dotted-background bg-light p-8 border-b border-white/10" style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT})` }}>
        <ResumeSection />
      </section>

      <section id="contact" className="min-h-screen dotted-background bg-dark p-8 border-b border-white/10" style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT} - ${BOTTOM_SECTION_HEIGHT})` }}>
        <ContactSection />
      </section>

      <section id="bottom" className="h-[96px] bg-[#1E222C] m-auto border-b border-white/10 flex  justify-center items-center">
        <BottomSection />
      </section>
    </main>
  );
}
