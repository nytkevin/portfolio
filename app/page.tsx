import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Tech from "./components/tech";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}
