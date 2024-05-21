import styles from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <form action="#">
        <input
          type="text"
          name="text"
          // size={100}
          placeholder="Enter Your Name*"
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email*"
          required
        />
        <select>
          <option value="Your Question About..">Your Question About..</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Travel Visa">Travel Visa</option>
          <option value="Working Visa">Working Visa</option>
          <option value="Business Visa">Business Visa</option>
          <option value="Visitor Visa">Visitor Visa</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="comment"
          form="usrform"
          placeholder="Your Message..."
        ></textarea>

        <button type="submit" value=" Send Your Message">
          Send Your Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
