import styles from "./WhyUs.module.css";

function WhyUs() {
  return (
    <section className={styles.whyUsSection}>
      <div className={styles.container}>
        {/* Title */}
        <h2 className={styles.title}>WHY WE STAND OUT</h2>

        {/* Description */}
        <p className={styles.description}>
          We strive for greatness, we never settle for less. Every aspect of our facility, training programs, and
          community is designed to push you beyond your limits and help you achieve extraordinary results.
        </p>

        {/* Benefits grid */}
        <div className={styles.benefitsGrid}>
          {/* Nutrition & wellness coaching */}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Nutrition & Wellness Coaching</h3>
            <p className={styles.cardText}>
              Nutritious meals, nutrition plans and one on one coaching when it comes to a custom made wellness profile
              so we can achieve your personal goals. Our certified nutrition experts work with you to develop
              personalized plans that complement your fitness journey.
            </p>
          </div>

          {/* Intense classes & open gym */}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Intense Classes & Open Gym</h3>
            <p className={styles.cardText}>
              We offer classes throughout the entire day as well as open gym sessions where you can come in and get some
              work done. Our classes are specially made following workouts that elite and professional level athletes
              complete everyday.
            </p>
          </div>

          {/* Special events & community */}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Special Events & Community</h3>
            <p className={styles.cardText}>
              Access to our special events that we host, this can include anything from a special Saturday workout class
              in a special location, to a weekend getaway in nature, to parties and celebrations for any occasion. Build
              lasting friendships while achieving your fitness goals.
            </p>
          </div>

          {/* Expert level equipment */}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Expert Level Equipment</h3>
            <p className={styles.cardText}>
              Expert level equipment where you could come into a class as a complete beginner and we have everything
              there that takes you from beginner to elite level athlete. Our facility is equipped with the latest
              technology and equipment used by professional athletes.
            </p>
          </div>

          {/* Personalized training programs*/}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Personalized Training Programs</h3>
            <p className={styles.cardText}>
              Our one-on-one personalized training sessions are tailored to your specific fitness needs and goals.
              Whether you're a beginner or an experienced athlete, our expert trainers will create a custom workout plan
              to help you achieve optimum results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
