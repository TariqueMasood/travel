"use client";

import ServiceList from "@/components/service-list/service-list";
import WhyChoose from "@/components/why-choose-section/why-choose-section";
import VisaProcess from "@/components/visa-process/visa-process";
import Hero from "@/components/hero/hero";
import Consultation from "@/components/consultation/consultation";
import Country from "@/components/country/country";
import ScrollBtn from "@/components/scroll-btn/scroll-btn";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceList />
      <WhyChoose />
      <VisaProcess />
      <Country />
      <Consultation />
      <ScrollBtn />
    </main>
  );
}
