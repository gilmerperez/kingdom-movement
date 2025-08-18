import styles from "./Banner.module.css";

function Banner({ imageSrc, text, secondaryText }) {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImageContainer}>
          <img src={imageSrc} alt="Banner image" />
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerText}>{text}</h2>
          {secondaryText && <p className={styles.bannerSecondaryText}>{secondaryText}</p>}
        </div>
      </div>
    </>
  );
}

export default Banner;
