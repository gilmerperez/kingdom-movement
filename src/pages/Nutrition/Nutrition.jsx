import styles from "./Nutrition.module.css";
import { useEffect, useState } from "react";
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
      <main className={styles.mainContainer}>
        <section className={styles.nutritionContainer}>
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Nutrition Menu</h1>
            <p className={styles.pageSubtitle}>Fuel your workouts with our premium nutrition offerings</p>
          </div>

          {/* Category Filter Buttons */}
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${selectedCategory === category.id ? styles.activeFilter : ""}`}
                onClick={() => handleCategorySelect(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className={styles.menuGrid}>
            {filteredMenuItems.map((item) => (
              <div key={item.id} className={styles.menuCard}>
                {/* Food Image */}
                <div className={styles.imageContainer}>
                  <img
                    src={item.imagePath}
                    alt={item.name}
                    className={styles.foodImage}
                    onError={(e) => {
                      // Fallback for missing images
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <div className={styles.imagePlaceholder}>
                    <span>Image Coming Soon</span>
                  </div>
                </div>

                {/* Food Details */}
                <div className={styles.foodDetails}>
                  <h3 className={styles.foodName}>{item.name}</h3>
                  <div className={styles.foodInfo}>
                    <span className={styles.foodPrice}>${item.price.toFixed(2)}</span>
                    <span className={styles.foodCalories}>{item.calories} cal</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
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
