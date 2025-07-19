import styles from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

          {/* Navigation */}
          <div className={styles.navContainer}>
            <nav className={styles.navLinks}>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/pricing">PRICING</NavLink>
              <NavLink to="/schedule">SCHEDULE</NavLink>
              <NavLink to="/nutrition">NUTRITION</NavLink>
            </nav>
            <button className={styles.ctaButton}>FREE CLASS</button>
          </div>

          {/* Hamburger Menu */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
        </section>

        {/* Dropdown Menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
          <NavLink to="/" onClick={toggleMenu}>
            HOME
          </NavLink>
          <NavLink to="/pricing" onClick={toggleMenu}>
            PRICING
          </NavLink>
          <NavLink to="/schedule" onClick={toggleMenu}>
            SCHEDULE
          </NavLink>
          <NavLink to="/nutrition" onClick={toggleMenu}>
            NUTRITION
          </NavLink>
          <button className={styles.mobileCTA}>FREE CLASS</button>
        </div>
      </header>
    </>
  );
}

export default Header;
