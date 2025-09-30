import styles from "./Contact.module.css";
import { useEffect, useState } from "react";

function Contact() {
  // * Set page title
  useEffect(() => {
    document.title = "Kingdom Movement | Contact";
  }, []);

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // * Send email
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "kngdm.mvmnt.llc@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <main>
        <div className={styles.contactContainer}>
          {/* Introduction */}
          <section className={styles.contactIntroduction}>
            {/* Title */}
            <h1 className={styles.contactTitle}>LET'S CONNECT</h1>
            {/* Description */}
            <p className={styles.contactDescription}>
              Whether you're exploring business opportunities, potential sponsorships, community partnerships, or simply
              have questions about our programs — we'd love to connect with you. Reach out below and a member of our
              team will follow up shortly.
            </p>
          </section>

          {/* Email form */}
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
                SEND MESSAGE
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
