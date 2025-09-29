import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerContainer}>
          <section className={styles.topContainer}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <img src="/logo-white.png" alt="Kingdom Movement Logo" />
            </div>
            {/* Legal text */}
            <p className={styles.legalDisclaimer}>
              Kingdom Movement offers fitness training and wellness guidance for educational and informational purposes
              only. This site does not provide medical advice, diagnosis, or treatment. Participation in classes is at
              your own risk. Always consult with a licensed medical professional before beginning any new exercise
              program.
            </p>
            {/* Copyright */}
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Kingdom Movement. All rights reserved.</p>
          </section>

          {/* Seperator */}
          <hr className={styles.seperator} />

          <section className={styles.bottomContainer}>
            {/* Site navigation */}
            <section className={styles.siteNavigation}>
              <h5 className={styles.navHeader}>PAGES</h5>
              <nav className={styles.navItems}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/nutrition">Nutrition</NavLink>
                <NavLink to="/schedule">Schedule</NavLink>
                <NavLink to="/membership">Membership</NavLink>
              </nav>
            </section>
            {/* Social links */}
            <section className={styles.socialLinks}>
              <h5 className={styles.navHeader}>CONNECT</h5>
              <nav className={styles.navItems}>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61554804519847&ref=_ig_profile_ac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/kngdm.mvmnt/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                {/* Google page */}
                <a
                  href="https://www.google.com/search?q=KINGDOM+MVMNT+LLC&rlz=1C1RXQR_enUS1087US1087&oq=KINGDOM+MVMNT+LLC&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgcIAxAAGO8FMgoIBBAAGIAEGKIEMgcIBRAAGO8FMgYIBhBFGDwyBggHEEUYPNIBBzQ2M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Page
                </a>
              </nav>
            </section>
            {/* Legal pages */}
            <section className={styles.legalPages}>
              <h5 className={styles.navHeader}>LEGAL</h5>
              <nav className={styles.navItems}>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </nav>
            </section>
            {/* Contact info */}
            <section className={styles.contactInfo}>
              <h5 className={styles.navHeader}>CONTACT</h5>
              <nav className={styles.navItems}>
                {/* Phone number */}
                <a href="tel:3213520639">(321) 352-0639</a>

                {/* Email */}
                <a href="mailto:kngdm.mvmnt.llc@gmail.com">kngdm.mvmnt.llc@gmail.com</a>
                {/* Address */}
                <a
                  href="https://www.google.com/maps/dir//6881+Kingspointe+Pkwy+Suit+%234,+Orlando,+FL+32819/@28.4598497,-81.5201714,27790m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x88dd87daa64f54c7:0xb0e764b4072e95b9!2m2!1d-81.43777!2d28.4598745?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  6881 Kingspointe Parkway Suite #4 Orlando, FL 32819
                </a>
              </nav>
            </section>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
