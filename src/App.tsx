import "./App.css";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { DesktopNavigation } from "./component/DesktopNavigation";
import { Experience } from "./component/Experience";
import { ExperienceList } from "./component/ExperienceList";
import { Footer } from "./component/Footer";
import { HamburgerNavigation } from "./component/HamburgerNavigation";
import { Profile } from "./component/Profile";
import { Projects } from "./component/Projects";

function App() {
  return (
    <>
      <DesktopNavigation />
      <HamburgerNavigation />
      <Profile />
      <About />
      <Experience>
        <ExperienceList title={"Frontend Development"} skills={[]} />
        <ExperienceList title={"Backend Development"} skills={[]} />
      </Experience>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
