import { useEffect } from "react";
import styles from "./TermsOfService.module.css";

function TermsOfService() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Terms of Service";
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];

  return (
    <>
      <main>
        <section className={styles.termsOfServiceContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>TERMS OF SERVICE</h1>

          <section className={styles.terms}>
            {/* Introduction */}
            <p className={styles.introduction}>
              By accessing this website, you agree to comply with the following terms and conditions. Please read these
              terms carefully before using our services.
            </p>

            {/* Site usage */}
            <p className={styles.termsHeading}>Site Usage</p>
            <p className={styles.termsText}>
              This website is intended for general informational purposes related to our CrossFit studio. All content is
              subject to change without notice. Unauthorized use of this site may give rise to a claim for damages.
            </p>

            {/* No liability */}
            <p className={styles.termsHeading}>No Liability</p>
            <p className={styles.termsText}>
              We are not responsible for any loss or damage that may occur from using this website. All information is
              provided “as is,” without any warranties of any kind.
            </p>

            {/* Modifications */}
            <p className={styles.termsHeading}>Modifications</p>
            <p className={styles.termsText}>
              We may revise these terms at any time. By using this website, you agree to be bound by the current version
              of these terms. Last updated: {month} {year}.
            </p>

            {/* Membership and scheduling disclaimers */}
            <p className={styles.termsHeading}>Membership and Scheduling Disclaimer</p>
            <p className={styles.termsText}>
              Membership tiers, class schedules, and food menu offerings are subject to change without prior notice.
              While we strive to keep all information up-to-date, availability and tiers may vary. Please contact our
              team directly for the most current details.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default TermsOfService;
