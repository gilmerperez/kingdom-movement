import styles from "./Contact.module.css";
import { useEffect, useState } from "react";

function Contact() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Contact";
  }, []);

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Send Email
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "moonstaresthetics@gmail.com";
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
          We'd love to hear from you. Whether you have a question about our services, want to request a consultation, or
          simply want to say hello — feel free to reach out below.
        </p>

        {/* Form */}
        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {/* Subject */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={styles.formControl}
              />
              <label htmlFor="subject">Subject</label>
            </div>

            {/* Message */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <textarea
                id="message"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.formControl}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitBtn}>
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contact;
