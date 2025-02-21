import AboutMe from "./pages/AboutMe/AboutMe";
import ContactoContainer from "./pages/Contact/ContactContainer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import { useShowFixedNavbar } from "./hooks/useShowFixedNavbar";
import CursorBubble from "./components/CursorBubble/CursorBubble";
import { useDeviceHasCursor } from "./hooks/useDeviceHasCursor";
import FixedNavbar from "./layout/Navbar/FixedNavbar";
import LanguageContextProvider from "./context/Language";

function App() {
  const showNavbar = useShowFixedNavbar();
  const hasCursor = useDeviceHasCursor();
  console.log(hasCursor);
  return (
    <LanguageContextProvider>
      {hasCursor && <CursorBubble />}
      {showNavbar && <FixedNavbar />}
      <main>
        <Home />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactoContainer />
      </main>
    </LanguageContextProvider>
  );
}

export default App;
