import {
  PiBagSimpleThin,
  PiGlobeThin,
  PiGraduationCapThin,
} from "react-icons/pi";
import WhyChoooseCard from "../why-choose-card/why-choose-card";
import styles from "./why-choose-section.module.css";
import HeaderTitle from "../header-title/header-title";

const cardData = [
  {
    title: 820,
    subTitle: "Students",
    icon: <PiGraduationCapThin />,
  },

  {
    title: 81,
    subTitle: "Countries",
    icon: <PiGlobeThin />,
  },

  {
    title: 830,
    subTitle: "Immigrations",
    icon: <PiBagSimpleThin />,
  },
];

const WhyChoose = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <HeaderTitle
          title="Why Choose Travel"
          subTitle="Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa"
          styles={{ textAlign: "center", color: "white" }}
        />
        <div className={styles.whyChooseCard}>
          {cardData?.map((card) => (
            <WhyChoooseCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
