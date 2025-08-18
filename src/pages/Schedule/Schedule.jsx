import styles from "./Schedule.module.css";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import scheduleData from "../../data/schedule.json";

function Schedule() {
  // Set page title
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
      <main>
        <section className={styles.scheduleContainer}>
          {/* Banner */}
          <Banner
            imageSrc="/images/group3.jpg"
            text="MORE THAN FITNESS — IT'S A MOVEMENT"
            secondaryText="WE BELIEVE MOVEMENT UNLOCKS POTENTIAL AND PURPOSE"
          />

          {/* Heading */}
          <h1 className={styles.heading}>MEMBERSHIP TIERS</h1>

          {/* Introduction */}
          <p className={styles.introduction}>
            Discover the perfect schedule to elevate your fitness journey. Each day offers unique activities designed to
            challenge and inspire you. Join us and unlock your potential through consistent movement and dedication.
          </p>

          {/* Schedule */}
          <div className={styles.scheduleWrapper}>
            {/* Day tabs */}
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
            {/* Schedule content */}
            <div className={styles.scheduleContent}>
              {selectedDayData.status === "Closed" ? (
                // Closed message
                <div className={styles.closedMessage}>
                  <h2 className={styles.closedMessageTitle}>CLOSED</h2>
                  <p className={styles.closedMessageText}>
                    We are closed on Sundays <br /> Come back tomorrow!
                  </p>
                </div>
              ) : (
                // Schedule table
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
