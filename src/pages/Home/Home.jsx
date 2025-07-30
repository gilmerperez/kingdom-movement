import { useEffect } from "react";
import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import HomeCTA from "../../components/HomeCTA/HomeCTA";

function Home() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Home";
  }, []);

  return (
    <>
      {/* Banner */}
      <Banner
        text="BUILT FOR GLORY — BORN TO MOVE"
        imageSrc="/src/assets/images/home1.jpg"
        secondaryText="EVERY PERSON IS TRAINED TO RISE — MENTALLY, PHYSICALLY, SPIRITUALLY"
        gradient={true}
        gradientDirection="to bottom"
        gradientColors={["hsla(0, 0%, 0%, 0.0)", "hsla(0, 0%, 0%, 0.80)"]}
      />

      <main>
        <section className={styles.homeContainer}></section>
      </main>

      {/* CTA Component */}
      <HomeCTA />
    </>
  );
}

export default Home;
