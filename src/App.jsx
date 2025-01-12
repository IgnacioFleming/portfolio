import AboutMe from "./pages/AboutMe/AboutMe";
import ContactoContainer from "./pages/Contact/ContactContainer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Navbar from "./layout/Navbar/Navbar";
import { useShowFixedNavbar } from "./hooks/useShowFixedNavbar";
import CursorBubble from "./components/CursorBubble/CursorBubble";
import { useDeviceHasCursor } from "./hooks/useDeviceHasCursor";

function App() {
  const showNavbar = useShowFixedNavbar();
  const hasCursor = useDeviceHasCursor();

  return (
    <>
      {hasCursor && <CursorBubble />}
      {showNavbar && (
        <header className="w-full fixed bg-dark z-10 opacity-80">
          <Navbar className="w-11/12" />
        </header>
      )}
      <main>
        <Home />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactoContainer />
      </main>
    </>
  );
}

export default App;
