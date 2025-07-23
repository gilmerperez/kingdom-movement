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
          Interested in collaborating with Kingdom Movement? Whether you're exploring business opportunities, potential
          sponsorships, community partnerships, or simply have questions about our programs — we'd love to connect with
          you. Reach out below and a member of our team will follow up shortly.
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
              <label htmlFor="subject">SUBJECT</label>
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
              <label htmlFor="message">MESSAGE</label>
            </div>

            {/* Submit */}
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
