import CountryCard from "../country-card/country-card";
import HeaderTitle from "../header-title/header-title";
import styles from "./country.module.css";
import uaeFlag from "../../../public/images/uae-flag.png";
import saudiFlag from "../../../public/images/saudi-falg.png";
import bahrainFlag from "../../../public/images/bahrain-flag.png";
import omanFlag from "../../../public/images/oman-flag.png";
import qatarFlag from "../../../public/images/qatar-flag.png";
import kuwaitFlag from "../../../public/images/kuwait-flag.png";

const cardData = [
  {
    id: 1,
    country: "saudi arabia",
    flag: saudiFlag,
  },

  {
    id: 2,
    country: "UAE",
    flag: uaeFlag,
  },

  {
    id: 3,
    country: "bahrain",
    flag: bahrainFlag,
  },

  {
    id: 4,
    country: "oman",
    flag: omanFlag,
  },

  {
    id: 5,
    country: "qatar",
    flag: qatarFlag,
  },

  {
    id: 6,
    country: "kuwait",
    flag: kuwaitFlag,
  },
];

const Country = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.countryWrapper}>
          <div className={styles.content}>
            <HeaderTitle
              heading="COUNTRIES YOU CAN VISIT"
              title="Countries we support for the"
              colorTitle="immigration"
            />
            <button className={styles.exploreBtn}>Explore More</button>
          </div>
          <div className={styles.country}>
            {cardData.map((card) => (
              <CountryCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
