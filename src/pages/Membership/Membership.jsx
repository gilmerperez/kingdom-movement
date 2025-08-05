import styles from "./Membership.module.css";
import { useEffect, useState } from "react";
import membershipData from "../../data/membership.json";
import Banner from "../../components/Banner/Banner";

function Membership() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Membership";
    setMemberships(membershipData.memberships);
  }, []);

  const [memberships, setMemberships] = useState([]);

  // Membership order
  const reorderMemberships = (memberships) => {
    const silver = memberships.find((m) => m.id === "silver");
    const diamond = memberships.find((m) => m.id === "diamond");
    const gold = memberships.find((m) => m.id === "gold");
    const bronze = memberships.find((m) => m.id === "bronze");
    const hyrox = memberships.find((m) => m.id === "hyrox");

    return [silver, diamond, gold, bronze, hyrox].filter(Boolean);
  };

  return (
    <>
      {/* Banner */}
      <Banner
        text="TRAIN HARD. LIVE BOLD. MOVE WITH PURPOSE"
        imageSrc="/images/home2.jpg"
        secondaryText="EVERY MOVEMENT HAS MEANING. WE TRAIN WITH DEEPER PURPOSE, FOR MORE THAN JUST PHYSICAL GAINS"
        gradient={true}
        gradientDirection="to top"
        gradientColors={["hsla(0, 0%, 5%)", "hsl(0, 0%, 0%, 0.0)"]}
      />

      <main>
        <section className={styles.membershipContainer}>
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
            {reorderMemberships(memberships).map((membership) => (
              <div
                key={membership.id}
                className={`${styles.membershipCard} ${membership.isPopular ? styles.popular : ""} ${
                  membership.id === "gold" ? styles.gold : ""
                } ${membership.id === "silver" ? styles.silver : ""} ${
                  membership.id === "bronze" ? styles.bronze : ""
                } ${membership.id === "hyrox" ? styles.hyrox : ""}`}
              >
                {membership.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}

                {/* Membership name */}
                <h2 className={styles.membershipName}>{membership.name}</h2>

                {/* Price / month */}
                <div className={styles.priceContainer}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{membership.price}</span>
                  <span className={styles.period}>/month</span>
                </div>

                {/* Seperator */}
                <div className={styles.separator}></div>

                {/* Membership benefits */}
                <h3 className={styles.featuresTitle}>Membership Benefits</h3>
                <ul className={styles.featuresList}>
                  {membership.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Sign up button */}
                <button className={`${styles.signUpButton} ${membership.isPopular ? styles.popularButton : ""}`}>
                  {membership.ctaText}
                </button>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className={styles.additionalInfoContainer}>
            <div className={styles.additionalInfo}>
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
                  For a complete list of Kingdom Movement Crossfit policies, rules, and regulations, feel free to
                  contact us at email@address.com
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
          </div>
        </section>
      </main>
    </>
  );
}

export default Membership;
