import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <nav>
            <h4>Links</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/client">Client</Link>
              </li>
              <li>
                <Link href="vacancy">Vacancies</Link>
              </li>
              <li>
                <Link href="contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4>Visa</h4>
            <ul className={styles.list}>
              <li>
                <Link href="#">Work Visa</Link>
              </li>
              <li>
                <Link href="#">Visitor Visa</Link>
              </li>
              <li>
                <Link href="#">Family Visa</Link>
              </li>
              <li>
                <Link href="#">Business Visa</Link>
              </li>
              <li>
                <Link href="#">Skilled Work Visa</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4>Services</h4>
            <ul className={styles.list}>
              <li>
                <Link href="#">Visa Consultancy</Link>
              </li>
              <li>
                <Link href="#">Travel Insurance</Link>
              </li>
              <li>
                <Link href="#">Work Permits</Link>
              </li>
              <li>
                <Link href="#">PR Applicants</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.contact}>
            <h4>Contact Details</h4>
            <div>
              <p className={styles.address}>
                hunsapura near dr.sarfraz <br />
                kopaganj (mau) U.P IND <br />
                (275305)
              </p>
              <br />
              <p>
                <Link href="tel:+91 9935177951">Phone: +91 9935177951</Link>
              </p>
              <p>
                <Link href="tel:+91 9695410786">Phone: +91 9695410786</Link>
              </p>
              <p>
                Email:{" "}
                <Link href="mailto:hellodemo@gmail.com">
                  hellodemo@gmail.com
                </Link>
              </p>
              <br />
              <p>Mon-Fri: 9:00AM – 6:30PM</p>
              <p>Saturday: 8:30AM – 3:30PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.copyright}>
            <p>Copyright &copy; DesignStudio 2024.All Rights Reserved</p>
          </div>
          <div>
            <span>
              <Link href="#">
                <FaInstagram />
              </Link>
            </span>
            <span>
              <Link href="#">
                <FaTwitter />
              </Link>
            </span>
            <span>
              <Link href="#">
                <FaFacebookF />
              </Link>
            </span>
            <span>
              <Link href="#">
                <FaLinkedin />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
