import styles from "./Home.module.css";
import Navbar from "../../layout/Navbar/Navbar";
import HomeBackground from "./HomeBackground/HomeBackground";
import HomeContent from "./HomeContent/HomeContent";

function Home() {
  return (
    <div className={styles.container}>
      <HomeBackground />
      <div className={styles.innerLayout}>
        <header>
          <Navbar />
        </header>
        <section className={`flex justify-center items-center h-5/6`}>
          <HomeContent />
        </section>
      </div>
    </div>
  );
}

export default Home;
