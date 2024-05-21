import Image from "next/image";
import styles from "./country-card.module.css";

type cardProps = {
  flag: any;
  country: string;
};

const CountryCard = (props: cardProps) => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.flagImg} src={props.flag} alt="Image" />
      <p>{props.country}</p>
    </div>
  );
};

export default CountryCard;
