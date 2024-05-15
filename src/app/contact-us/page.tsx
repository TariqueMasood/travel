import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./contact-us.module.css";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

const BreadCrumb = () => {
  return (
    <div className="container">
      <div className={styles.topSection}>
        <div>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.arrowIcon}>
          <MdKeyboardDoubleArrowRight />
        </div>
        <div>Contact</div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className={styles.topSectionContainer}>
      <BreadCrumb />
      <div className={styles.wrapper}>
        <div className="container">
          <h1>Have Questions? Get in Touch</h1>
          <p className={styles.subTitle}>
            Cursus porta, feugiat primis in ultrice ligula risus auctor tempus
            dolor feugiat, felis lacinia risus interdum auctor id viverra dolor
            iaculis luctus placerat and massa
          </p>
          <div className={styles.formContainer}>
            <div className={styles.contactWrapper}>
              <div className={styles.contact}>
                <div className={styles.locationIcon}>
                  <div className={styles.locationDiv}>
                    <CiLocationOn />
                  </div>
                </div>
                <div>
                  <p className={styles.contactTitle}>
                    121 King St, Melbourne VIC 3000 Australia
                  </p>
                  <p className={styles.contactSubTitle}>Our Location</p>
                </div>
              </div>
              <div className={styles.contact}>
                <div className={styles.locationIcon}>
                  <div className={styles.locationDiv}>
                    <CiLocationOn />
                  </div>
                </div>
                <div>
                  <p className={styles.contactTitle}>
                    121 King St, Melbourne VIC 3000 Australia
                  </p>
                  <p className={styles.contactSubTitle}>Our Location</p>
                </div>
              </div>
              <div className={styles.contact}>
                <div className={styles.locationIcon}>
                  <div className={styles.locationDiv}>
                    <CiLocationOn />
                  </div>
                </div>
                <div>
                  <p className={styles.contactTitle}>
                    121 King St, Melbourne VIC 3000 Australia
                  </p>
                  <p className={styles.contactSubTitle}>Our Location</p>
                </div>
              </div>
            </div>
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
                  <option value="Your Question About..">
                    Your Question About..
                  </option>
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
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1715781089277!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
