import styles from "./HomeCTA.module.css";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className={styles.ctaComponent}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <span className={styles.kngdm}>KNGDM</span>
        <span className={styles.mvmnt}>MVMNT</span>
      </div>

      {/* Flexible Scheduling */}
      <p className={styles.text}>
        No matter your schedule — early mornings, mid-day breaks, or late-night grinds — we've got classes to match your
        pace. Get in, get after it, and get results on your time.
      </p>

      {/* Membership Benefits */}
      <p className={styles.text}>
        We offer multiple membership levels to match your commitment and lifestyle — each one unlocking new levels of
        support, perks, and access. The more you invest in yourself, the greater the results you'll see. Growth here
        compounds.
      </p>

      {/* Nutrition Support */}
      <p className={styles.text}>
        Nutrition is power. Whether you're chasing gains, energy, or recovery, our team will help you create a
        personalized plan that fuels every workout and drives real, lasting results. We've also got pre and post workout
        options ready to go.
      </p>

      {/* Final CTA */}
      <p className={styles.text}>
        You're not just joining a gym. You're joining a team that refuses to quit on you. <br /> Ready to move with
        purpose?
      </p>

      {/* CTA Button */}
      <Link to="/pricing" className={styles.joinButton}>
        JOIN NOW
      </Link>
    </section>
  );
};

export default HomeCTA;
