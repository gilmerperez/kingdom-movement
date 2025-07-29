import styles from "./Schedule.module.css";
import { useEffect, useState } from "react";
import scheduleData from "../../data/schedule.json";
import runningImage from "../../assets/images/running.jpg";

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
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        {/* Image */}
        <div className={styles.heroImage}>
          <img src={runningImage} alt="People running together" />
          <div className={styles.heroOverlay}>
            {/* Text Content */}
            <div className={styles.heroContent}>
              <h1>DISCOVER STRENGTH AND VERSATILITY AT OUR FUNCTIONAL FITNESS CENTER</h1>
              <p>
                Elevate your fitness journey with top-notch equipment and expert guidance in a supportive environment
              </p>
            </div>
          </div>
        </div>
      </section>

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
