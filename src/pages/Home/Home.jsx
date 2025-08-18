import { useEffect } from "react";
import styles from "./Home.module.css";
import WhyUs from "../../components/WhyUs/WhyUs";
import Banner from "../../components/Banner/Banner";
import Coaches from "../../components/Coaches/Coaches";
import HomeCTA from "../../components/HomeCTA/HomeCTA";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Nutrition from "../../components/Nutrition/Nutrition";
import OurMission from "../../components/OurMission/OurMission";

function Home() {
  // Set page title
  useEffect(() => {
    document.title = "Kingdom Movement | Home";
  }, []);

  return (
    <main>
      <section className={styles.homeContainer}>
        {/* Banner */}
        <Banner
          imageSrc="/images/home1.jpg"
          text="BUILT FOR GLORY — BORN TO MOVE"
          secondaryText="EVERY PERSON IS TRAINED TO RISE — MENTALLY, PHYSICALLY, SPIRITUALLY"
        />
        {/* Who we are */}
        <WhoWeAre />
        {/* Our mission */}
        <OurMission />
        {/* Coaches */}
        <Coaches />
        {/* Why us */}
        <WhyUs />
        {/* Nutrition */}
        <Nutrition />
        {/* CTA component */}
        <HomeCTA />
      </section>
    </main>
  );
}

export default Home;
