import { useEffect } from "react";
import styles from "./TermsOfService.module.css";

function TermsOfService() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Terms of Service";
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
              These Terms of Service govern your use of the Moonstar Esthetics website. By visiting or using this site,
              you agree to comply with and be bound by these terms. If you do not agree, please refrain from using the
              site.
            </p>

            {/* Acceptable Use */}
            <p className={styles.termsHeading}>Acceptable Use</p>
            <p className={styles.termsText}>
              You agree to use this website for lawful, informational purposes only. You must not interfere with the
              operation of the site, attempt unauthorized access, or misuse any of its content or functionality.
            </p>

            {/* No User Accounts */}
            <p className={styles.termsHeading}>No User Accounts</p>
            <p className={styles.termsText}>
              This website does not require account creation or login. You may access and browse all public content
              without registering or providing personal information.
            </p>

            {/* Service Disclaimer */}
            <p className={styles.termsHeading}>Service Disclaimer</p>
            <p className={styles.termsText}>
              Information on this site is provided for general reference and promotional purposes only. While we strive
              for accuracy, Moonstar Esthetics does not guarantee the completeness or reliability of any content and
              reserves the right to update or remove information at any time.
            </p>

            {/* Content Ownership */}
            <p className={styles.termsHeading}>Intellectual Property</p>
            <p className={styles.termsText}>
              All content on this website, including logos, text, graphics, and styling, is the property of Moonstar
              Esthetics unless otherwise stated. You may not reproduce, modify, or distribute any materials without
              written permission.
            </p>

            {/* Changes to Terms */}
            <p className={styles.termsHeading}>Changes to These Terms</p>
            <p className={styles.termsText}>
              These Terms of Service may be updated periodically. Continued use of the website after changes have been
              made constitutes acceptance of the revised terms. Last updated: {month} {year}.
            </p>

            {/* Appointment Booking */}
            <p className={styles.termsHeading}>Appointment Scheduling</p>
            <p className={styles.termsText}>
              Appointment bookings are processed through{" "}
              <a href="https://setmore.com" target="_blank" rel="noopener noreferrer">
                Setmore
              </a>
              , a third-party scheduling platform. Any information submitted through Setmore is subject to their own{" "}
              <a href="https://www.setmore.com/privacy" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{" "}
              and privacy policies.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default TermsOfService;
