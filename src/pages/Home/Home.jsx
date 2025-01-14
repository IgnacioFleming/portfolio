import styles from "./Home.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import HomeBackground from "./HomeBackground/HomeBackground";
import HomeContent from "./HomeContent/HomeContent";
import BurgerNavbar from "../../layout/Navbar/BurgerNavbar";

function Home() {
  const isNarrowViewport = window.innerWidth < 1024;
  return (
    <div className={styles.container}>
      <HomeBackground />
      <div id="home" className={styles.innerLayout}>
        <header className="hidden md:block">
          <Navbar />
        </header>
        {isNarrowViewport && <BurgerNavbar />}
        <section className={`flex justify-center items-center h-5/6`}>
          <HomeContent />
        </section>
      </div>
    </div>
  );
}

export default Home;
