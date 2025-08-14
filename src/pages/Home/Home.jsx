import { useEffect } from "react";
import styles from "./Home.module.css";
import WhyUs from "../../components/WhyUs/WhyUs";
import Banner from "../../components/Banner/Banner";
import Coaches from "../../components/Coaches/Coaches";
import HomeCTA from "../../components/HomeCTA/HomeCTA";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurMission from "../../components/OurMission/OurMission";
import NutritionComponent from "../../components/NutritionComponent/NutritionComponent";

function Home() {
  // Set page title
  useEffect(() => {
    document.title = "Kingdom Movement | Home";
  }, []);

  return (
    <>
      {/* Banner */}
      <Banner
        text="BUILT FOR GLORY — BORN TO MOVE"
        imageSrc="/images/home1.jpg"
        secondaryText="EVERY PERSON IS TRAINED TO RISE — MENTALLY, PHYSICALLY, SPIRITUALLY"
        gradient={true}
        gradientDirection="to top"
        gradientColors={["hsla(0, 0%, 5%)", "hsl(0, 0%, 0%, 0.0)"]}
      />

      <main>
        <section className={styles.homeContainer}>
          {/* Mission statements */}
          <div className={styles.missionStatements}>
            {/* Who we are */}
            <WhoWeAre />
            {/* Our mission */}
            <OurMission />
          </div>
          {/* Coaches */}
          <Coaches />
          {/* Why us */}
          <WhyUs />
          {/* Nutrition */}
          <NutritionComponent />
        </section>
      </main>
      {/* CTA component */}
      <HomeCTA />
    </>
  );
}

export default Home;
