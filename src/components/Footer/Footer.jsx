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
                <span className={styles.moonstar}>MOONSTAR</span>
                <span className={styles.esthetics}>ESTHETICS</span>
              </NavLink>
              {/* Copyright */}
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Moonstar Esthetics. <br /> All rights reserved.
              </p>
            </section>

            {/* Site Navigation */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Navigation</h5>
              <nav className={styles.footerNav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink to="/information">Information</NavLink>
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
                <a href="tel:3213520639">
                  <p>(321) 352-0639</p>
                </a>
                <a href="mailto:moonstaresthetics@gmail.com">
                  <p>moonstaresthetics@gmail.com</p>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Moonstar+Esthetics+6881+Kingspointe+Pkwy+Suite+4+Orlando+FL+32819"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    6881 Kingspointe Pkwy Suite 4 <br /> Orlando, Florida 32819
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
              Moonstar Esthetics provides professional skincare and wellness services. This website is for informational
              purposes only and does not offer medical advice, diagnosis, or treatment. All services are by appointment
              only. Please consult a licensed professional for personalized care.
            </p>

            {/* Copyright */}
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Moonstar Esthetics. All rights reserved.
            </p>
          </section>
        </section>
      </footer>
    </>
  );
}

export default Footer;
