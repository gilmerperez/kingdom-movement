import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Privacy Policy";
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
        <section className={styles.privacyPolicyContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>PRIVACY POLICY</h1>

          <section className={styles.policy}>
            {/* Introduction */}
            <p className={styles.introduction}>
              Your privacy matters. This privacy policy outlines how we manage your information when visiting our
              website. Please read this policy carefully to understand our practices regarding your data and how we
              strive to protect your privacy.
            </p>

            {/* Policy Updates */}
            <p className={styles.policyHeading}>Policy Updates</p>
            <p className={styles.policyText}>
              We may revise this policy occasionally. Updates will always appear on this page. Last updated: {month}{" "}
              {year}.
            </p>

            {/* Purpose of the Site */}
            <p className={styles.policyHeading}>Purpose of the Site</p>
            <p className={styles.policyText}>
              This website serves as an informational platform for our CrossFit studio. It includes details about our
              programs, pricing, class schedule, and community events. No purchases or account logins are required to
              browse.
            </p>

            {/* Personal Information */}
            <p className={styles.policyHeading}>Personal Information</p>
            <p className={styles.policyText}>
              We do not collect any personal data directly through this website. You can navigate our content without
              providing your name, email, or other personal details.
            </p>

            {/* Cookies and Tracking */}
            <p className={styles.policyHeading}>Cookies and Analytics</p>
            <p className={styles.policyText}>
              This website does not use cookies, tracking pixels, or third-party analytics tools. We do not track your
              browsing behavior or device usage.
            </p>

            {/* Pricing and Scheduling Disclaimer */}
            <p className={styles.policyHeading}>Pricing and Scheduling Disclaimer</p>
            <p className={styles.policyText}>
              Membership pricing, class schedules, and food menu offerings are subject to change without prior notice.
              While we strive to keep all information up-to-date, availability and pricing may vary. Please contact our
              team directly for the most current details.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default PrivacyPolicy;
