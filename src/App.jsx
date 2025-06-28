import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./FeatureCards";
import Navbar from "./components/NavBar";
import Certification from "./sections/Certification";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    <TechStack />
    <Certification />
    <Contact />
    <Footer />
  </>
);

export default App;
