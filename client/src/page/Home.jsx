import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Project Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Home;
