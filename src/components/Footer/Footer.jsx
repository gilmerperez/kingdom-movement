import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className={styles.footerContainer}>
        <section className={styles.bigFooter}>
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

        {/* Logo & Legal Text */}
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

        {/* Social Icons */}
        <section className={styles.footerColumn}>
          <h5 className={styles.navHeader}>Connect</h5>
          <div className={styles.socialIcons}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/kngdm.mvmnt/?locale=zh_CN&hl=am-et"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
            {/* Google Maps */}
            <a
              href="https://www.google.com/search?q=Rangers+Kingdom+&sca_esv=2dc8bb8b89129ca2&rlz=1C1RXQR_enUS1087US1087&biw=1745&bih=828&ei=eQCAaPGbBayUwbkPlL-26QU&ved=0ahUKEwixvN65stGOAxUsSjABHZSfLV0Q4dUDCBA&uact=5&oq=Rangers+Kingdom+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEFJhbmdlcnMgS2luZ2RvbSAyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSKUGUM4DWM4DcAF4AJABAJgBXqABogGqAQEyuAEDyAEA-AEBmAICoAJlwgILEAAYsAMYogQYiQXCAggQABiwAxjvBZgDAIgGAZAGBJIHATKgB44JsgcBMbgHYcIHBTAuMS4xyAcF&sclient=gws-wiz-serp"
              target="_blank"
              aria-label="Google Maps"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-location-dot fa-xl"></i>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61554804519847&ref=_ig_profile_ac"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-facebook fa-xl"></i>
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
