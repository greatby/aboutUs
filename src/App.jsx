import AboutJourneySection from "./components/AboutJourneySection";
import AboutSection from "./components/AboutSection";
import EnagagementStats from "./components/EnagagementStats";
import FadeInWhenVisible from "./components/FadeEffects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LeadershipGrid from "./components/LeadershipGrid";
// import Navbar from "./components/navbar";
import NavbarNew from "./components/NavbarNew";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <FadeInWhenVisible>
        <NavbarNew />
      </FadeInWhenVisible>
      <Hero />
      <AboutSection />
      <AboutJourneySection />
      {/* <EnagagementStats /> */}
      {/* <LeadershipGrid /> */}
      <Footer />
    </div>
  );
}
export default App;
