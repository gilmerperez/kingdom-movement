import { useEffect } from "react";
import styles from "./Schedule.module.css";
import runningImage from "../../assets/images/running.jpg";

function Schedule() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Schedule";
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroImage}>
          <img src={runningImage} alt="People running together" />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1>DISCOVER STRENGTH AND VERSATILITY AT OUR FUNCTIONAL FITNESS CENTER</h1>
              <p>
                Elevate your fitness journey with top-notch equipment and expert guidance in a supportive environment
              </p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className={styles.scheduleContainer}></section>
      </main>
    </>
  );
}

export default Schedule;
