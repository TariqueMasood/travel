import Image from "next/image";
import styles from "./founder.module.css";
import { RxAvatar } from "react-icons/rx";

const Founder = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.founderImg}>
        <RxAvatar />
      </div>
      <h3>monazir ahsan</h3>
      <p>CEO & Founder</p>
    </div>
  );
};

export default Founder;
