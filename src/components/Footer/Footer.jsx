import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className={styles.footerContainer}>
        <section className={styles.bigFooter}>
          {/* Social Icons */}
          <section className={styles.footerColumn}>
            <h5 className={styles.navHeader}>Connect</h5>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.google.com/maps/place/rangers+kingdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
              >
                <i className="fa-solid fa-location-dot"></i>
              </a>
            </div>
          </section>

          {/* Navigation */}
          <section className={styles.footerColumn}>
            <h5 className={styles.navHeader}>Navigation</h5>
            <nav className={styles.footerNav}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/schedule">Schedule</NavLink>
              <NavLink to="/nutrition">Nutrition</NavLink>
            </nav>
          </section>

          {/* Contact Info */}
          <section className={styles.footerColumn}>
            <h5 className={styles.navHeader}>Contact</h5>
            <div className={styles.footerNav}>
              <a href="tel:3213375193">(321) 337-5193</a>
              <a href="mailto:email@address.com">email@address.com</a>
              <a href="https://www.google.com/maps/place/rangers+kingdom" target="_blank" rel="noopener noreferrer">
                6881 Kingspointe Pkwy
                <br />
                Suite #4 Orlando, FL 32819
              </a>
            </div>
          </section>

          {/* Legal */}
          <section className={styles.footerColumn}>
            <h5 className={styles.navHeader}>Legal</h5>
            <nav className={styles.footerNav}>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-of-service">Terms of Service</NavLink>
            </nav>
          </section>
        </section>

        {/* Footer Bottom Section */}
        <section className={styles.bottomFooter}>
          <div className={styles.logoContainer}>
            <span className={styles.kngdm}>KNGDM</span>
            <span className={styles.mvmnt}>MVMNT</span>
          </div>
          <p className={styles.legalDisclaimer}>
            KNGDM MVMNT offers fitness training and wellness guidance for educational and informational purposes only.
            This site does not provide medical advice, diagnosis, or treatment. Participation in classes is at your own
            risk. Always consult with a licensed medical professional before beginning any new exercise program.
          </p>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Kingdom Movement. All rights reserved.</p>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
