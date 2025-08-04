import styles from "./Nutrition.module.css";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import nutritionData from "../../data/nutrition.json";

function Nutrition() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Nutrition";
  }, []);

  // State for managing selected category filter
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get all categories for filter buttons
  const categories = [{ id: "all", name: "All" }, ...nutritionData.categories];

  // Filter menu items based on selected category
  const filteredMenuItems =
    selectedCategory === "all"
      ? nutritionData.menuItems
      : nutritionData.menuItems.filter((item) => item.category === selectedCategory);

  // Handle category filter selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      {/* Banner */}
      <Banner
        text="STRENGTH. SPIRIT. KINGDOM"
        imageSrc="/images/gym.jpg"
        secondaryText="BODIES, MINDS, AND LIVES. WE CHANGE LIVES THROUGH CHALLENGE AND CONSISTENCY"
        gradient={true}
        gradientDirection="to bottom"
        gradientColors={["hsla(0, 0%, 0%, 0.0)", "hsla(0, 0%, 0%, 0.80)"]}
      />

      <main>
        <section className={styles.nutritionContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>NUTRITION MENU</h1>

          {/* Introduction */}
          <p className={styles.introduction}>Fuel your workouts with our premium nutrition offerings</p>

          {/* Category filters */}
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`${styles.filterButton} ${selectedCategory === category.id ? styles.activeFilter : ""}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div className={styles.menuGrid}>
            {filteredMenuItems.map((item) => (
              <div key={item.id} className={styles.menuCard}>
                {/* Food Image */}
                <div className={styles.imageContainer}>
                  <img
                    alt={item.name}
                    src={item.imagePath}
                    className={styles.foodImage}
                    onError={(e) => {
                      // Fallback for missing images
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <div className={styles.imagePlaceholder}>
                    <span>{item.name} Image</span>
                  </div>
                </div>

                {/* Food details */}
                <div className={styles.foodDetails}>
                  <h3 className={styles.foodName}>{item.name}</h3>
                  <p className={styles.foodDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* If no items are found in the category */}
          {filteredMenuItems.length === 0 && (
            <div className={styles.emptyState}>
              <p>No items found in this category.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Nutrition;
