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
          <NavLink to="/" className={styles.logoContainer}>
            <span className={styles.kngdm}>KNGDM</span>
            <span className={styles.mvmnt}>MVMNT</span>
          </NavLink>

          {/* Navigation */}
          <div className={styles.navContainer}>
            <nav className={styles.navLinks}>
              <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ""}`}>
                HOME
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ""}`}
              >
                PRICING
              </NavLink>
              <NavLink
                to="/schedule"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ""}`}
              >
                SCHEDULE
              </NavLink>
              <NavLink
                to="/nutrition"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ""}`}
              >
                NUTRITION
              </NavLink>
            </nav>
            {/* Free Class Button */}
            <button className={styles.freeClassButton}>
              <a
                href="https://rangerschamps.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26ProgramId%3D0%26LocationId%3D10458%26IsToViewScheduleOnly%3DTrue"
                target="_blank"
                rel="noopener noreferrer"
              >
                FREE CLASS
              </a>
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
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
          {/* Free Class Button */}
          <button className={styles.mobileFreeClassButton}>
            <a
              href="https://rangerschamps.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26ProgramId%3D0%26LocationId%3D10458%26IsToViewScheduleOnly%3DTrue"
              target="_blank"
              rel="noopener noreferrer"
            >
              FREE CLASS
            </a>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
