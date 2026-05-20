import AboutMe from "./components/about_me";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Hero from "./components/hero";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
