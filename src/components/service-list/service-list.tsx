import ServiceCard from "../service-card/service-card";
import styles from "./service-list.module.css";
import HeaderTitle from "../header-title/header-title";
import educationImg from "../../../public/images/education-img.png";
import businessImg from "../../../public/images/business-man-img.png";
import skilledImg from "../../../public/images/skill-img.png";
import familyImg from "../../../public/images/family-img.png";
import touristImg from "../../../public/images/tourist-img.png";
import residentImg from "../../../public/images/resident-img.png";

const services = [
  {
    title: "education visa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: educationImg,
  },
  {
    title: "business immigration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: businessImg,
  },
  {
    title: "skilled immigration",
    desc: "Lorem ipsum dolor sit amet, consectetur elit. Qui dicta minus molestiae.",
    icon: skilledImg,
  },
  {
    title: "spous/family visas",
    desc: "Lorem ipsum dolor provident reiciendis optio in voluptatem.",
    icon: familyImg,
  },
  {
    title: "tourist & visitor visas",
    desc: "Lorem ipsum dolor sit amet, elit. Qui dicta minus molestiae",
    icon: touristImg,
  },
  {
    title: "resident return visas",
    desc: "Lorem ipsum dolor sit amet, expedita sunt et",
    icon: residentImg,
  },
];

const ServiceList = () => {
  return (
    <div className={styles.cardList}>
      <div className="container">
        <div className={styles.titleContainer}>
          {" "}
          <HeaderTitle
            styles={{ textAlign: "center" }}
            title="our"
            colorTitle="services"
          />
        </div>
        <div className={styles.wrapper}>
          {services?.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
