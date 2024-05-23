import ServiceCard from "../service-card/service-card";
import styles from "./service-list.module.css";
import HeaderTitle from "../header-title/header-title";
import {
  IoBagHandleOutline,
  IoPeopleOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import { PiWrenchLight } from "react-icons/pi";
import { BsLuggage } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";

const services = [
  {
    title: "education visa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: <IoSchoolOutline />,
  },
  {
    title: "business immigration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: <IoBagHandleOutline />,
  },
  {
    title: "skilled immigration",
    desc: "Lorem ipsum dolor sit amet, consectetur elit. Qui dicta minus molestiae.",
    icon: <PiWrenchLight />,
  },
  {
    title: "spous/family visas",
    desc: "Lorem ipsum dolor provident reiciendis optio in voluptatem.",
    icon: <IoPeopleOutline />,
  },
  {
    title: "tourist & visitor visas",
    desc: "Lorem ipsum dolor sit amet, elit. Qui dicta minus molestiae",
    icon: <BsLuggage />,
  },
  {
    title: "resident return visas",
    desc: "Lorem ipsum dolor sit amet, expedita sunt et",
    icon: <CiGlobe />,
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
