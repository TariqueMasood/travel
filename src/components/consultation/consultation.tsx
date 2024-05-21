import Image from "next/image";
import HeaderTitle from "../header-title/header-title";
import styles from "./consultation.module.css";
import formImg from "../../../public/images/form-bg-img.png";
import ContactForm from "../contact-form/contact-form";
import Founder from "../founder/founder";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Consultation = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.consultant}>
          <div className={styles.contact}>
            <div>
              <HeaderTitle
                heading="CONTACT WITH US"
                title="Book your"
                colorTitle="consultation"
                subTitle="There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis."
              />
              <div>
                <ul className={styles.list}>
                  {" "}
                  <li>
                    <span>
                      <IoIosCheckmarkCircle />
                    </span>{" "}
                    Making this the first true generator on the Internet
                  </li>
                  <li>
                    <span>
                      <IoIosCheckmarkCircle />
                    </span>{" "}
                    Lorem Ipsum is not simply random text
                  </li>
                  <li>
                    <span>
                      <IoIosCheckmarkCircle />
                    </span>{" "}
                    If you are going to use a passage
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.founder}>
              <Founder />
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.formImage}>
              <Image src={formImg} alt="Image" />
            </div>
            <div className={styles.formContainer}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
