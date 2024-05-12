import ServiceList from "@/components/service-list/service-list";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ServiceList />
    </main>
  );
}
