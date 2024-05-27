import Image from "next/image";
import styles from "./service-card.module.css";
import { ReactNode } from "react";

type cardProps = {
  icon: string | any;
  title: string;
  desc: string;
};

const ServiceCard = (props: cardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconImg}>
        <Image src={props.icon} alt="pic" />
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
