import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  // * Set page title
  useEffect(() => {
    document.title = "Kingdom Movement | Page Not Found";
  }, []);

  return (
    <>
      <main className={styles.pageNotFoundContainer}>
        {/* Introduction */}
        <section className={styles.pageNotFoundIntroduction}>
          {/* Title */}
          <h1 className={styles.pageNotFoundTitle}>PAGE NOT FOUND</h1>
          {/* Description */}
          <p className={styles.pageNotFoundDescription}>Sorry, the page you are looking for does not exist</p>
        </section>

        {/* Back home button */}
        <Link to="/" className={styles.backButton}>
          BACK TO HOME PAGE
        </Link>
      </main>
    </>
  );
}

export default NotFound;
