import { useRef } from "react";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={homeRef}>
        <Hero scrollToSection={scrollToSection} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default Home;
