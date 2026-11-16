import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Tech from "./components/tech";
import Footer from "./components/footer";
import { MotionConfig } from "framer-motion";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div>
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  );
}
