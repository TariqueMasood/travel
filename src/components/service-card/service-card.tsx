import styles from "./service-card.module.css";
import { ReactNode } from "react";

type cardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const ServiceCard = (props: cardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconImg}>{props.icon}</div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
