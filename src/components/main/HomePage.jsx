/**
 * Alex Knowlton
 * 9/15/2020
 *
 * Layout for the home page of the website, used for Routing.
 */
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Sources from "./Sources";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Sources />
    </div>
  );
}
