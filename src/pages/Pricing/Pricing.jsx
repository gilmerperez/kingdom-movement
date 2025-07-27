import { useEffect, useState } from "react";
import styles from "./Pricing.module.css";
import pricingData from "../../data/pricing.json";

function Pricing() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Pricing";
    setMemberships(pricingData.memberships);
  }, []);

  const [memberships, setMemberships] = useState([]);

  return (
    <>
      <main>
        <section className={styles.pricingContainer}>
          {/* Heading */}
          <h1 className={styles.header}>MEMBERSHIP TIERS</h1>

          {/* Introduction */}
          <p className={styles.introduction}>
            Choose the plan that fits your fitness journey. Each membership tier is designed to support your goals,
            whether you're just starting out or ready to push your limits. Join our community and transform your life
            through movement.
          </p>

          {/* Membership Cards */}
          <div className={styles.pricingCards}>
            {/* For Each Card */}
            {memberships.map((membership) => (
              <div
                key={membership.id}
                className={`${styles.pricingCard} ${membership.isPopular ? styles.popular : ""}`}
              >
                {membership.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}

                <div className={styles.cardHeader}>
                  {/* Membership Name */}
                  <h2 className={styles.membershipName}>{membership.name}</h2>
                  {/* Membership Frequency */}
                  <p className={styles.frequency}>{membership.frequency}</p>
                </div>

                {/* Price Per Month */}
                <div className={styles.priceContainer}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{membership.price}</span>
                  <span className={styles.period}>/ month</span>
                </div>

                {/* Seperator */}
                <div className={styles.separator}></div>

                {/* Membership Benefits */}
                <h3 className={styles.featuresTitle}>What's Included:</h3>
                <ul className={styles.featuresList}>
                  {membership.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Additional Info */}
                <div className={styles.additionalInfo}>
                  <p>
                    <strong>Class Access:</strong> <br /> {membership.classAccess}
                  </p>
                  {membership.guestPasses > 0 && (
                    <p>
                      <strong>Guest Passes:</strong> <br /> {membership.guestPasses} / month
                    </p>
                  )}
                </div>

                {/* Saturday Disclaimer */}
                <div className={styles.commonBenefit}>
                  <p>All plans include Saturday as an additional free day for our members.</p>
                </div>

                {/* Sign Up Button */}
                <button className={`${styles.signUpButton} ${membership.isPopular ? styles.popularButton : ""}`}>
                  {membership.ctaText}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Pricing;
