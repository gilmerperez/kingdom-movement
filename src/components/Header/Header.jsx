import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <section className={styles.headerContainer}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <span className={styles.kngdm}>
              <NavLink to="/">KNGDM</NavLink>
            </span>
            <span className={styles.mvmnt}>
              <NavLink to="/">MVMNT</NavLink>
            </span>
          </div>

          <div className={styles.navContainer}>
            {/* Navigation */}
            <nav className={styles.navLinks}>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/pricing">PRICING</NavLink>
              <NavLink to="/schedule">SCHEDULE</NavLink>
              <NavLink to="/nutrition">NUTRITION</NavLink>
            </nav>
            {/* Free Class CTA */}
            <button className={styles.ctaButton}>FREE CLASS</button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
