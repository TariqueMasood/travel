"use client";

import styles from "./service-card.module.css";
import { ReactNode } from "react";
import { withFaroProfiler } from "@grafana/faro-react";

type cardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const ServiceCard = (props: cardProps) => {
  const a = 15;
  const b = 15;
  console.log("a", a);

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

export default withFaroProfiler(ServiceCard);
