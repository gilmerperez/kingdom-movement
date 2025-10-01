import { useEffect } from "react";
import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurMission from "../../components/OurMission/OurMission";
import Coaches from "../../components/Coaches/Coaches";
import WhyUs from "../../components/WhyUs/WhyUs";
import Nutrition from "../../components/Nutrition/Nutrition";
import HomeCTA from "../../components/HomeCTA/HomeCTA";

function Home() {
  // * Set page title
  useEffect(() => {
    document.title = "Kingdom Movement | Home";
  }, []);

  return (
    <>
      {/* Banner */}
      <Banner
        imageSrc="/images/home1.jpg"
        text="BUILT FOR GLORY — BORN TO MOVE"
        secondaryText="EVERY PERSON IS TRAINED TO RISE — MENTALLY, PHYSICALLY, SPIRITUALLY"
      />

      <main>
        <div className={styles.homeContainer}>
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
        </div>
      </main>
    </>
  );
}

export default Home;
