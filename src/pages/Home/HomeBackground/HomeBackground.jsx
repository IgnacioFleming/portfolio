import { useState } from "react";
import styles from "../Home.module.css";

function HomeBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  return (
    <div className={styles.backgroundWrapper}>
      <video preload="auto" autoPlay muted loop playsInline onLoadedData={handleVideoLoaded} className={styles.backgroundVideo}>
        <source src="/videos/blueNeonBG.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HomeBackground;
