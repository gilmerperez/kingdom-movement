import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  // * Sticky header logic
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

  // * Custom styles for active page
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

  // * Mobile sidebar toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // Handle hamburger click with spin animation
  const handleHamburgerClick = () => {
    setIsSpinning(true);
    setMenuOpen(true);

    // Reset spinning state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 300);
  };

  // * Phone call handler
  const handlePhoneClick = () => {
    window.location.href = "tel:(321) 337-5193";
  };

  // * Theme switch
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
          {/* Desktop header */}
          <div className={styles.desktopHeader}>
            {/* Logo */}
            <NavLink to="/" className={styles.logoContainer}>
              <img src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"} alt="Kingdom Movement Logo" />
            </NavLink>
            <div className={styles.navContainer}>
              {/* Site navigation */}
              <nav className={styles.navItems}>
                <NavLink to="/" className={navLinkClass}>
                  HOME
                </NavLink>
                <NavLink to="/nutrition" className={navLinkClass}>
                  NUTRITION
                </NavLink>
                <NavLink to="/schedule" className={navLinkClass}>
                  SCHEDULE
                </NavLink>
                <NavLink to="/membership" className={navLinkClass}>
                  MEMBERSHIP
                </NavLink>
              </nav>
              {/* Seperator */}
              <span className={styles.seperator}>|</span>
              {/* Theme button */}
              <button className={styles.themeButton} onClick={toggleTheme}>
                <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
                <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
              </button>
              {/* Free class button */}
              <button className={styles.freeClassButton}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://rangerschamps.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26LocationId%3D10458"
                >
                  FREE CLASS
                </a>
              </button>
            </div>
          </div>

          {/* Mobile header */}
          <div className={styles.mobileHeader}>
            {/* Phone icon */}
            <button className={styles.phoneButton} onClick={handlePhoneClick}>
              <i className="fa-solid fa-phone fa-xl"></i>
            </button>
            {/* Logo */}
            <NavLink to="/" className={styles.mobileLogoContainer}>
              <img src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"} alt="Kingdom Movement Logo" />
            </NavLink>
            {/* Hamburger icon */}
            <button className={styles.hamburger} onClick={handleHamburgerClick}>
              <i className={`fa-solid fa-bars fa-xl ${isSpinning ? styles.spin : ""}`}></i>
            </button>
          </div>
        </section>
      </header>

      {/* Sidebar */}
      {menuOpen &&
        createPortal(
          <div className={styles.sidebarOverlay} onClick={() => setMenuOpen(false)}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar close button */}
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              {/* Sidebar site navigation */}
              <nav className={styles.sidebarNavItems}>
                <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-house"></i>
                  HOME
                </NavLink>
                <NavLink to="/nutrition" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-apple-alt"></i>
                  NUTRITION
                </NavLink>
                <NavLink to="/schedule" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-calendar"></i>
                  SCHEDULE
                </NavLink>
                <NavLink to="/membership" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-id-card"></i>
                  MEMBERSHIP
                </NavLink>
                {/* Seperator */}
                <hr className={styles.sidebarSeperator} />
                {/* Free class button */}
                <button className={styles.sidebarFreeClassButton}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://rangerschamps.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26LocationId%3D10458"
                  >
                    FREE CLASS
                  </a>
                </button>
              </nav>
              {/* Sidebar footer */}
              <footer className={styles.sidebarFooter}>
                {/* Theme button */}
                <button className={`${styles.themeButton} ${styles.sidebarThemeButton}`} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
                  <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
                </button>
                {/* Legal pages */}
                <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-paper-plane"></i>
                  CONTACT
                </NavLink>
                <NavLink to="/privacy-policy" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-shield-halved"></i>
                  PRIVACY POLICY
                </NavLink>
                <NavLink to="/terms-of-service" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-asterisk"></i>
                  TERMS OF SERVICE
                </NavLink>
              </footer>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
