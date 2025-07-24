import styles from "./Home.module.css";
import HomeCTA from "../../components/HomeCTA/HomeCTA";

function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.homeContainer}>
          <HomeCTA />
        </section>
      </main>
    </>
  );
}

export default Home;
