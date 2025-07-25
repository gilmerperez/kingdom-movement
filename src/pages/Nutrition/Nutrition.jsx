import { useEffect } from "react";
import styles from "./Nutrition.module.css";

function Nutrition() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Nutrition";
  }, []);

  return (
    <>
      <main>
        <section className={styles.nutritionContainer}>Nutrition</section>
      </main>
    </>
  );
}

export default Nutrition;
