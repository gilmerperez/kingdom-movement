import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.legalContainer}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <span className={styles.kngdm}>KNGDM</span>
            <span className={styles.mvmnt}>MVMNT</span>
          </div>
          {/* Legal Text */}
          <p className={styles.legalDisclaimer}>
            Kingdom Movement offers fitness training and wellness guidance for educational and informational purposes
            only. This site does not provide medical advice, diagnosis, or treatment. Participation in classes is at
            your own risk. Always consult with a licensed medical professional before beginning any new exercise
            program.
          </p>
          {/* Copyright */}
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Kingdom Movement. All rights reserved.</p>
        </div>

        {/* Seperator */}
        <hr className={styles.seperator} />

        <div className={styles.navContainer}>
          {/* Legal Pages */}
          <section className={styles.legalSection}>
            <h5 className={styles.navHeader}>Legal</h5>
            <nav className={styles.footerNav}>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-of-service">Terms of Service</NavLink>
            </nav>
          </section>

          {/* Socials */}
          <section className={styles.socialSection}>
            <h5 className={styles.navHeader}>Connect</h5>
            <nav className={styles.footerNav}>
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
              {/* Google Page */}
              <a
                href="https://www.google.com/search?q=Rangers+Kingdom+LLC+&sca_esv=21b8fdcecfe5527b&rlz=1C1RXQR_enUS1087US1087&ei=31iBaKqHHraWwbkPo5zZkQM&ved=0ahUKEwjq8uDy-tOOAxU2SzABHSNONjIQ4dUDCBA&uact=5&oq=Rangers+Kingdom+LLC+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFFJhbmdlcnMgS2luZ2RvbSBMTEMgMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMggQABiiBBiJBTIIEAAYogQYiQUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI4g1QvQNYmApwAXgAkAEAmAFloAHEA6oBAzQuMbgBA8gBAPgBAZgCBqAC2APCAhEQLhiABBiwAxjHARiOBRivAcICCRAAGLADGAcYHsICCBAAGIAEGLADwgIHEAAYsAMYHsICBRAAGIAEwgILEAAYgAQYhgMYigXCAgUQABjvBZgDAIgGAZAGCpIHAzUuMaAH1BqyBwM0LjG4B9UDwgcFMC40LjLIBxA&sclient=gws-wiz-serp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Page
              </a>
            </nav>
          </section>

          {/* Site Navigation */}
          <section className={styles.navigationSection}>
            <h5 className={styles.navHeader}>Pages</h5>
            <nav className={styles.footerNav}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/nutrition">Nutrition</NavLink>
              <NavLink to="/schedule">Schedule</NavLink>
            </nav>
          </section>

          {/* Contact Info */}
          <section className={styles.contactSection}>
            <h5 className={styles.navHeader}>Contact</h5>
            <nav className={styles.footerNav}>
              <a href="tel:3213375193">(321) 337-5193</a>
              <a href="mailto:email@address.com">email@address.com</a>
              <a
                href="https://www.google.com/maps/place/Rangers+Kingdom+LLC/@28.4598745,-81.4403449,17z/data=!4m6!3m5!1s0x88dd87daa64f54c7:0xb0e764b4072e95b9!8m2!3d28.4598745!4d-81.43777!16s%2Fg%2F11rdz8gr7f?authuser=1&entry=tts&g_ep=EgoyMDI1MDIxMC4wIPu8ASoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                6881 Kingspointe Pkwy
                <br />
                Suite #4 Orlando, FL 32819
              </a>
            </nav>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
