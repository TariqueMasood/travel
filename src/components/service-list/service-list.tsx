import ServiceCard from "../service-card/service-card";
import { MdBusinessCenter, MdFamilyRestroom, MdSchool } from "react-icons/md";
import styles from "./service-list.module.css";
import { FaGlobe, FaWrench } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import HeaderTitle from "../header-title/header-title";

const services = [
  {
    title: "education visa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: <MdSchool />,
  },
  {
    title: "business immigration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: <MdBusinessCenter />,
  },
  {
    title: "skilled immigration",
    desc: "Lorem ipsum dolor sit amet, consectetur elit. Qui dicta minus molestiae.",
    icon: <FaWrench />,
  },
  {
    title: "spous/family visas",
    desc: "Lorem ipsum dolor provident reiciendis optio in voluptatem.",
    icon: <MdFamilyRestroom />,
  },
  {
    title: "tourist & visitor visas",
    desc: "Lorem ipsum dolor sit amet, elit. Qui dicta minus molestiae",
    icon: <FaPersonWalkingLuggage />,
  },
  {
    title: "resident return visas",
    desc: "Lorem ipsum dolor sit amet, expedita sunt et",
    icon: <FaGlobe />,
  },
];

const ServiceList = () => {
  return (
    <div className={styles.cardList}>
      <div className="container">
        <div className={styles.titleContainer}>
          {" "}
          <HeaderTitle
            title="our services"
            subTitle="Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa"
            styles={{ textAlign: "center" }}
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
