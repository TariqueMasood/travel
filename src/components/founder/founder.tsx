import Image from "next/image";
import styles from "./founder.module.css";
import founderImg from "../../../public/images/founder-img.jpg";

const Founder = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.founderImg}>
        <Image src={founderImg} alt="Image" />
      </div>
      <h3>munazir ahsan</h3>
      <p>CEO & Founder</p>
    </div>
  );
};

export default Founder;
