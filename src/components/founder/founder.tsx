import Image from "next/image";
import styles from "./founder.module.css";
import fouderImg from "../../../public/images/founderImgSvg.svg";

const Founder = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.founderImg}>
        <Image src={fouderImg} alt="founder Image" />
      </div>
      <h3>monazir ahsan</h3>
      <p>CEO & Founder</p>
    </div>
  );
};

export default Founder;
