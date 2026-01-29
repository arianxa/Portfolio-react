import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Aboutme } from "./components/Aboutme";
import { Skills } from "./components/Skills";
import { Projects } from "./components/projects";
import { Hero } from "./components/Hero";
import Contact from "./components/Contact";

export const App = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ScrollToTop>
  );
};

export default App;
