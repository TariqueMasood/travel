"use client";

import Image from "next/image";
import styles from "./country-card.module.css";
import { motion } from "framer-motion";

type cardProps = {
  flag: any;
  country: string;
};

const CountryCard = (props: cardProps) => {
  return (
    <div className={styles.wrapper}>
      {/* <motion.div whileHover={{ rotate: 360 }}> */}
        <Image className={styles.flagImg} src={props.flag} alt="Image" />
      {/* </motion.div> */}

      <p>{props.country}</p>
    </div>
  );
};

export default CountryCard;
