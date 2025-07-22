import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <section className={styles.footerContainer}>
          {/* Big Footer */}
          <section className={styles.bigFooter}>
            {/* Logo & Copyright */}
            <section className={styles.logoColumn}>
              {/* Logo */}
              <NavLink to="/" className={styles.logoContainer}>
                <span className={styles.kngdm}>KNGDM</span>
                <span className={styles.mvmnt}>MVMNT</span>
              </NavLink>
              {/* Copyright */}
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Kingdom Movement. <br /> All rights reserved.
              </p>
            </section>

            {/* Site Navigation */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Navigation</h5>
              <nav className={styles.footerNav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/schedule">Schedule</NavLink>
                <NavLink to="/nutrition">Nutrition</NavLink>
              </nav>
            </section>

            {/* Legal Information */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Legal</h5>
              <nav className={styles.footerNav}>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </nav>
            </section>

            {/* Contact Info */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Contact</h5>
              <div className={styles.footerNav}>
                <a href="tel:3213375193">
                  <p>(321) 337-5193</p>
                </a>
                <a href="mailto:email@address.com">
                  <p>email@address.com</p>
                </a>
                <a
                  href="https://www.google.com/maps/place/rangers+kingdom/data=!4m2!3m1!1s0x88dd87daa64f54c7:0xb0e764b4072e95b9?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    6881 Kingspointe Pkwy <br /> Suite #4 Orlando, FL 32819
                  </p>
                </a>
              </div>
            </section>
          </section>

          {/* Small Footer */}
          <section className={styles.smallFooter}>
            {/* Navigation Links */}
            <nav className={styles.footerLinks} aria-label="Footer Navigation">
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-of-service">Terms of Service</NavLink>
            </nav>

            {/* Legal Disclaimer */}
            <p className={styles.legalDisclaimer}>
              Kingdom Movement offers fitness training and wellness guidance for educational and informational purposes
              only. This site does not provide medical advice, diagnosis, or treatment. Participation in classes is at
              your own risk. Always consult with a licensed medical professional before beginning any new exercise
              program.
            </p>

            {/* Copyright */}
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Kingdom Movement. All rights reserved.</p>
          </section>
        </section>
      </footer>
    </>
  );
}

export default Footer;
