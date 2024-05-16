import ServiceList from "@/components/service-list/service-list";
import styles from "./page.module.css";
import WhyChoose from "@/components/why-choose-section/why-choose-section";
import VisaProcess from "@/components/visa-process/visa-process";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <ServiceList />
        <WhyChoose />
        <VisaProcess />
      </div>
    </main>
  );
}
