import AboutMe from "./pages/AboutMe/AboutMe";
import ContactoContainer from "./pages/Contact/ContactContainer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
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
