import AboutSection from "./components/AboutSection";
import EnagagementStats from "./components/EnagagementStats";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LeadershipGrid from "./components/LeadershipGrid";
// import Navbar from "./components/navbar";
import NavbarNew from "./components/NavbarNew";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarNew />
      <Hero />
      <AboutSection />
      {/* <EnagagementStats />
    <LeadershipGrid /> */}
      <Footer />
    </div>
  );
}
export default App;
