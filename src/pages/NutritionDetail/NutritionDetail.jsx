import { useEffect, useState } from "react";
import styles from "./NutritionDetail.module.css";
import Banner from "../../components/Banner/Banner";
import nutritionData from "../../data/nutrition.json";
import { useNavigate, useParams } from "react-router-dom";

function NutritionDetail() {
  // * Refs for navigation and menu item
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [menuItem, setMenuItem] = useState(null);

  // * Find the menu item by ID
  const item = nutritionData.menuItems.find((item) => item.id === itemId);

  // * Set page title
  useEffect(() => {
    if (item) {
      setMenuItem(item);
      document.title = `Kingdom Movement | ${item.name}`;
    } else {
      // If item not found, redirect to nutrition page
      navigate("/nutrition");
    }
  }, [itemId, navigate, item]);
  // If no menu item is found, show a loading message
  if (!menuItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Banner */}
      <Banner imageSrc={menuItem.imagePath} text={menuItem.name} secondaryText={menuItem.description} />

      <main className={styles.nutritionDetailContainer}>
        {/* Add-ons section */}
        {menuItem["add-ons"] && menuItem["add-ons"].length > 0 && (
          <section className={styles.optionsSection}>
            {/* Title */}
            <h2 className={styles.sectionTitle}>Want to enhance your {menuItem.name}?</h2>
            {/* Description */}
            <p className={styles.sectionDescription}>
              Here are some options that will help you achieve the result you are looking for
            </p>
            {/* Options list */}
            <ul className={styles.optionsList}>
              {menuItem["add-ons"].map((addon, index) => (
                <li key={`addon-${index}`} className={styles.optionItem}>
                  {addon.name}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Extras section */}
        {menuItem.extras && menuItem.extras.length > 0 && (
          <section className={styles.optionsSection}>
            {/* Title */}
            <h2 className={styles.sectionTitle}>Want to add extra benefits to your {menuItem.name}?</h2>
            {/* Description */}
            <p className={styles.sectionDescription}>
              Here are some options that will help you achieve the result you are looking for
            </p>
            {/* Options list */}
            <ul className={styles.optionsList}>
              {menuItem.extras.map((extra, index) => (
                <li key={`extra-${index}`} className={styles.optionItem}>
                  {extra.name}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Premium flavors section */}
        {menuItem["premium-flavors"] && menuItem["premium-flavors"].length > 0 && (
          <section className={styles.optionsSection}>
            {/* Title */}
            <h2 className={styles.sectionTitle}>Want to upgrade to one of our premium flavors?</h2>
            {/* Description */}
            <p className={styles.sectionDescription}>Here is a list of our premium flavors</p>
            {/* Options list */}
            <ul className={styles.optionsList}>
              {menuItem["premium-flavors"].map((flavor, index) => (
                <li key={`flavor-${index}`} className={styles.optionItem}>
                  {flavor.name}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Back button */}
        <button onClick={() => navigate("/nutrition")} className={styles.backButton}>
          BACK TO MENU
        </button>
      </main>
    </>
  );
}

export default NutritionDetail;
