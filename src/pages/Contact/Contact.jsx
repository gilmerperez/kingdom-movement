import styles from "./Contact.module.css";
import { useEffect, useState } from "react";

function Contact() {
  // Set Page Title
  useEffect(() => {
    document.title = "Kingdom Movement | Contact";
  }, []);

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Send Email
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "email@address.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <section className={styles.contactContainer}>
        {/* Heading */}
        <h1 className={styles.heading}>LET'S CONNECT</h1>

        {/* Introduction */}
        <p className={styles.introduction}>
          Whether you're exploring business opportunities, potential sponsorships, community partnerships, or simply
          have questions about our programs — we'd love to connect with you. Reach out below and a member of our team
          will follow up shortly.
        </p>

        {/* Form */}
        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {/* Subject field */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <input
                required
                type="text"
                id="subject"
                value={subject}
                placeholder="Subject"
                className={styles.formControl}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="subject">SUBJECT</label>
            </div>
            {/* Message field */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <textarea
                required
                id="message"
                value={message}
                placeholder="Message"
                className={styles.formControl}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="message">MESSAGE</label>
            </div>
            {/* Submit button */}
            <button type="submit" className={styles.submitBtn}>
              SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contact;
