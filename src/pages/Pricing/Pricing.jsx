import { useEffect } from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Pricing";
  }, []);

  return (
    <>
      <main>
        <section className={styles.pricingContainer}>Pricing</section>
      </main>
    </>
  );
}

export default Pricing;
