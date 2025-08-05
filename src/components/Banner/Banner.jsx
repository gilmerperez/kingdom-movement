import { useEffect, useRef, useState } from "react";
import styles from "./Banner.module.css";

function Banner({
  text,
  imageSrc,
  secondaryText,
  className = "",
  gradient = false,
  gradientDirection = "to bottom",
  gradientColors = ["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"],
}) {
  const bannerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.25}px)`,
  };

  // Handle CSS custom properties for gradient colors
  const getGradientColors = () => {
    return gradientColors.map((color) => {
      if (color === "var(--bg-color)") {
        // Get the computed value of the CSS custom property
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue("--bg-color").trim() || "hsl(0, 0%, 95%)";
      }
      return color;
    });
  };

  const gradientStyle = gradient
    ? {
        background: `linear-gradient(${gradientDirection}, ${getGradientColors().join(", ")})`,
      }
    : {};

  return (
    <div className={`${styles.bannerContainer} ${className}`} ref={bannerRef}>
      <div className={styles.bannerImage} style={parallaxStyle}>
        <img src={imageSrc} alt="Banner background" />
        {gradient && <div className={styles.gradientOverlay} style={gradientStyle}></div>}
      </div>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerText}>{text}</h2>
        {secondaryText && <p className={styles.bannerSecondaryText}>{secondaryText}</p>}
      </div>
    </div>
  );
}

export default Banner;
