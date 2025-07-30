import styles from "./Schedule.module.css";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import scheduleData from "../../data/schedule.json";

function Schedule() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Schedule";
  }, []);

  const [selectedDay, setSelectedDay] = useState("monday");
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const getDayDisplayName = (day) => {
    const dayNames = {
      sunday: "SUNDAY",
      monday: "MONDAY",
      tuesday: "TUESDAY",
      wednesday: "WEDNESDAY",
      thursday: "THURSDAY",
      friday: "FRIDAY",
      saturday: "SATURDAY",
    };
    return dayNames[day];
  };

  const selectedDayData = scheduleData.schedule[selectedDay];

  return (
    <>
      {/* Banner */}
      <Banner
        text="BUILT FOR GLORY — BORN TO MOVE"
        imageSrc="/src/assets/images/running.jpg"
        secondaryText="Join our community and discover your true potential"
        gradient={true}
        gradientDirection="to bottom"
        gradientColors={["hsla(0, 0%, 0%, 0.0)", "var(--bg-color)"]}
      />

      <main>
        <section className={styles.scheduleContainer}>
          {/* Schedule */}
          <div className={styles.scheduleWrapper}>
            {/* Day Tabs */}
            <div className={styles.dayTabs}>
              {days.map((day) => (
                <button
                  key={day}
                  className={`${styles.dayTab} ${selectedDay === day ? styles.activeTab : ""}`}
                  onClick={() => handleDaySelect(day)}
                >
                  {getDayDisplayName(day)}
                </button>
              ))}
            </div>
            {/* Schedule Content */}
            <div className={styles.scheduleContent}>
              {selectedDayData.status === "Closed" ? (
                // Closed Message
                <div className={styles.closedMessage}>
                  <h2 className={styles.closedMessageTitle}>CLOSED</h2>
                  <p className={styles.closedMessageText}>
                    We are closed on Sundays <br /> Come back tomorrow!
                  </p>
                </div>
              ) : (
                // Schedule Table
                <div className={styles.scheduleTable}>
                  {/* Header */}
                  <div className={styles.tableHeader}>
                    <div className={styles.activityHeader}>ACTIVITY</div>
                    <div className={styles.timeHeader}>TIME</div>
                  </div>
                  <div>
                    {/* Content */}
                    {selectedDayData.activities.map((activity, index) => (
                      <div key={index} className={styles.tableRow}>
                        <div className={styles.activityCell}>
                          <span className={styles.activityType}>{activity.type}</span>
                        </div>
                        <div className={styles.timeCell}>
                          <span className={styles.timeText}>{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Schedule;
