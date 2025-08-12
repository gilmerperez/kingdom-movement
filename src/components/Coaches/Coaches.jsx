import styles from "./Coaches.module.css";
import { useState, useEffect } from "react";
import coachesData from "../../data/coaches.json";

const Coaches = () => {
  const [currentCoachIndex, setCurrentCoachIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCoachIndex((prevIndex) => (prevIndex === coachesData.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentCoachIndex((prevIndex) => (prevIndex === 0 ? coachesData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentCoachIndex((prevIndex) => (prevIndex === coachesData.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentCoachIndex(index);
  };

  return (
    <section className={styles.coachesContainer}>
      {/* Coaches content */}
      <div className={styles.coachesContent}>
        <div className={styles.coachesInfo}>
          {/* Title */}
          <h2 className={styles.coachesTitle}>MEET YOUR EXPERT TRAINERS</h2>
          {/* Description */}
          <p className={styles.coachesDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          {/* CTA button */}
          <a
            rel="noopener noreferrer"
            className={styles.scheduleButton}
            href="https://rangerschamps.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26ProgramId%3D0%26LocationId%3D10458%26IsToViewScheduleOnly%3DTrue"
            target="_blank"
          >
            SCHEDULE A CLASS TODAY
          </a>
        </div>

        {/* Carousel */}
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            <div className={styles.carouselCard}>
              {/* Carousel image */}
              <div className={styles.coachImageContainer}>
                <img
                  className={styles.coachImage}
                  alt={coachesData[currentCoachIndex].name}
                  src={coachesData[currentCoachIndex].image}
                />
              </div>
              <div className={styles.coachInfo}>
                {/* Coach name */}
                <h3 className={styles.coachName}>{coachesData[currentCoachIndex].name}</h3>
                {/* Coach description */}
                <p className={styles.coachDescription}>{coachesData[currentCoachIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className={styles.carouselDots}>
            {coachesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to coach ${index + 1}`}
                className={`${styles.dot} ${index === currentCoachIndex ? styles.activeDot : ""}`}
              />
            ))}
          </div>

          {/* Previous button */}
          <button
            className={`${styles.carouselArrow} ${styles.prevArrow}`}
            onClick={handlePrevClick}
            aria-label="Previous coach"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            className={`${styles.carouselArrow} ${styles.nextArrow}`}
            onClick={handleNextClick}
            aria-label="Next coach"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
