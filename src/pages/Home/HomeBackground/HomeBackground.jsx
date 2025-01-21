import styles from "../Home.module.css";

function HomeBackground() {
  return (
    <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
      <source src="/videos/blueNeonBG.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default HomeBackground;
