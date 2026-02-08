import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Aboutme } from "./components/Aboutme";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import Contact from "./components/Contact";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
