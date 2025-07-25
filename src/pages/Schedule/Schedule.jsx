import { useEffect } from "react";
import styles from "./Schedule.module.css";

function Schedule() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Schedule";
  }, []);

  return (
    <>
      <main>
        <section className={styles.scheduleContainer}>Schedule</section>
      </main>
    </>
  );
}

export default Schedule;
