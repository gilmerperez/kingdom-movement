import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  // Set page title
  useEffect(() => {
    document.title = "Kingdom Movement | Page Not Found";
  }, []);

  return (
    <>
      <main className={styles.notFoundContainer}>
        {/* Heading */}
        <h1 className={styles.heading}>PAGE NOT FOUND</h1>

        {/* Introduction */}
        <p className={styles.introduction}>Sorry, the page you are looking for does not exist</p>

        {/* Go back to home page link */}
        <Link to="/" className={styles.homeLink}>
          BACK TO HOME PAGE
        </Link>
      </main>
    </>
  );
}

export default NotFound;
