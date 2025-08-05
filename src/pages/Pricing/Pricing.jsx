import styles from "./Pricing.module.css";
import { useEffect, useState } from "react";
import pricingData from "../../data/pricing.json";
import Banner from "../../components/Banner/Banner";

function Pricing() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Pricing";
    setMemberships(pricingData.memberships);
  }, []);

  const [memberships, setMemberships] = useState([]);

  return (
    <>
      {/* Banner */}
      <Banner
        text="TRAIN HARD. LIVE BOLD. MOVE WITH PURPOSE"
        imageSrc="/images/home2.jpg"
        secondaryText="EVERY MOVEMENT HAS MEANING. WE TRAIN WITH DEEPER PURPOSE, FOR MORE THAN JUST PHYSICAL GAINS"
        gradient={true}
        gradientDirection="to top"
        gradientColors={["hsla(0, 0%, 10%)", "hsl(0, 0%, 0%, 0.0)"]}
      />

      <main>
        <section className={styles.pricingContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>MEMBERSHIP TIERS</h1>

          {/* Introduction */}
          <p className={styles.introduction}>
            Choose the plan that fits your fitness journey. Each membership tier is designed to support your goals,
            whether you're just starting out or ready to push your limits. Join our community and transform your life
            through movement.
          </p>

          {/* Membership cards */}
          <div className={styles.membershipCards}>
            {memberships.map((membership) => (
              <div
                key={membership.id}
                className={`${styles.membershipCard} ${membership.isPopular ? styles.popular : ""}`}
              >
                {membership.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}

                <div className={styles.cardHeader}>
                  {/* Membership name */}
                  <h2 className={styles.membershipName}>{membership.name}</h2>
                  {/* Membership frequency */}
                  <p className={styles.frequency}>{membership.frequency}</p>
                </div>

                {/* Price / month */}
                <div className={styles.priceContainer}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{membership.price}</span>
                  <span className={styles.period}>/ month</span>
                </div>

                {/* Seperator */}
                <div className={styles.separator}></div>

                {/* Membership benefits */}
                <h3 className={styles.featuresTitle}>What's Included:</h3>
                <ul className={styles.featuresList}>
                  {membership.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Class access and guest passes */}
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

                {/* Saturday disclaimer */}
                <div className={styles.commonBenefit}>
                  <p>All plans include Saturday as an additional free day for our members.</p>
                </div>

                {/* Sign up button */}
                <button className={`${styles.signUpButton} ${membership.isPopular ? styles.popularButton : ""}`}>
                  {membership.ctaText}
                </button>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className={styles.additionalInfoContainer}>
            {/* Heading */}
            <h2 className={styles.additionalInfoTitle}>ADDITIONAL INFO</h2>
            {/* List of additional info */}
            <ul className={styles.additionalInfoList}>
              <li>Must be age 18 years or older to enroll.</li>
              <br />
              <li>The schedule is subject to change without prior notice.</li>
              <br />
              <li>All membership types are non-transferable, non-assignable, and non-saleable.</li>
              <br />
              <li>Prepaid memberships and sessions agreements are not subject to any hold options.</li>
              <br />
              <li>
                For a complete list of Kingdom Movement Crossfit policies, rules, and regulations, feel free to contact
                us at email@address.com
              </li>
              <br />
              <li>
                Month-to-Month membership holds may be placed two times per calendar year, up to three consecutive
                months each time. Must be 30 days in duration at minimum.
              </li>
              <br />
              <li>
                Month-to-Month membership cancellations without penalty require fifteen days advance written notice.
                Prepaid memberships and sessions memberships are not subject to any early termination options with
                exception of death or disability.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Pricing;
