import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Projects />
      </Layout>
    </>
  );
}

export default App;
