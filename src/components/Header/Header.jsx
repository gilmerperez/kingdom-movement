import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  // Mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Make mobile menu & hamburger icon disappear after 480px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Sticky header logic
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Theme switch
  const [theme, setTheme] = useState("dark");

  // Make theme be set in DOM
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Make media theme switch on phone's user settings
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      <header className={`${isScrollingUp ? styles.visible : styles.hidden}`}>
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
                to="/nutrition"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ""}`}
              >
                NUTRITION
              </NavLink>
              <NavLink
                to="/schedule"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ""}`}
              >
                SCHEDULE
              </NavLink>
            </nav>

            {/* Seperate Navigation and Functional Buttons */}
            <span className={styles.seperator}>|</span>

            {/* Functional Button */}

            {/* Theme Button */}
            <button className={styles.themeButton} onClick={toggleTheme}>
              <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} fa-sm`}></i>
              <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
            </button>

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
          {/* Theme Button */}
          <button className={`${styles.themeButton} ${styles.sidebarThemeButton}`} onClick={toggleTheme}>
            <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} fa-sm`}></i>
            <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
          </button>

          {/* Navigation */}
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
