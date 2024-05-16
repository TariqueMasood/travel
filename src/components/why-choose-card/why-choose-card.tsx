import { ReactNode } from "react";
import styles from "./why-choose-card.module.css";
import Image from "next/image";

type cardProps = {
  icon: ReactNode;
  title: number;
  subTitle: string;
};

const WhyChoooseCard = (props: cardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardIcon}>{props.icon}</div>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </div>
    </div>
  );
};

export default WhyChoooseCard;
