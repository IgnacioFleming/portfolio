import Layout from "./layout/Layout";
import AboutMe from "./pages/AboutMe/AboutMe";
import ContactoContainer from "./pages/Contact/ContactContainer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactoContainer />
      </Layout>
    </>
  );
}

export default App;
