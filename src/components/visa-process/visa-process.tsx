import styles from "./visa-process.module.css";

import img from "../../../public/images/image-1.png";
import Image from "next/image";

const VisaProcess = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionImage}>
            <Image src={img} alt="pic" />
          </div>
          <div className={styles.content}>
            <h1 className={styles.heading}>We make the visa process faster</h1>
            <p>
              Semper lacus cursus porta, feugiat primis ligula risus auctor and
              rhoncus in ultrice ligula purus ipsum primis in cubilia augue
              vitae laoreet augue in cubilia augue egestas an ipsum turpis
            </p>
            <h3>Cubilia augue vitae laoreet</h3>
            <ul>
              <li>
                Fringilla risus nec, luctus mauris orci auctor purus euismod at
                pretium purus pretium ligula rutrum viverra tortor sapien
                sodales congue magna undo pretium purus pretium an magnis nulla
              </li>
              <li>
                Quaerat sodales sapien undo euismod risus auctor egestas augue
                mauri undo viverra tortor sapien sodales sapien and vitae donec
                dolor sapien augue erat iaculis euismod
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcess;
