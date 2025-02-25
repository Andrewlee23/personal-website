import { useRef } from "react";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Involvements from "../Components/Involvements";
import Extras from "../Components/Extras";


function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const involvementsRef = useRef(null);
  const extrasRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={homeRef}>
        <Hero
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          involvementsRef={involvementsRef}
          extrasRef={extrasRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={involvementsRef}>
        <Involvements />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={extrasRef}>
        <Extras />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default Home;
