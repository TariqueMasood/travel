import styles from "./hero.module.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h3>welcome to travel</h3>
          <h1>
            immigration & visa <span>consultant</span>
          </h1>
          <button>
            book consultation now{" "}
            <span className={styles.arrowCss}>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
