import { useEffect } from "react";
import styles from "./Home.module.css";
import HomeCTA from "../../components/HomeCTA/HomeCTA";

function Home() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Home";
  }, []);

  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.homeContainer}>Home</section>
      </main>
      <HomeCTA />
    </>
  );
}

export default Home;
