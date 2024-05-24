import ServiceList from "@/components/service-list/service-list";
import styles from "./page.module.css";
import WhyChoose from "@/components/why-choose-section/why-choose-section";
import VisaProcess from "@/components/visa-process/visa-process";
import Hero from "@/components/hero/hero";
import Consultation from "@/components/consultation/consultation";
import Country from "@/components/country/country";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ServiceList />
      <WhyChoose />
      <VisaProcess />
      <Country />
      <Consultation />
    </main>
  );
}
