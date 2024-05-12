"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavList from "../nav-list/nav-list";
import { MdLocationOn } from "react-icons/md";
import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";

const TopHeader = () => {
  return (
    <div className="container">
      <div className={styles.topHeaderWrapper}>
        <div className={styles.locationIcon}>
          <MdLocationOn />
          <div>121 King St, Melbourne, Victoria 3000</div>
        </div>
        <div className={styles.phoneNumber}>
          <Link className={styles.phoneLink} href="tel:+61-2 3456 7890">
            <BsTelephone />
            <span>+61-2 3456 7890</span>
          </Link>
          <Link className={styles.phoneLink} href="tel:+61-2 3456 7890">
            <BsTelephone /> <span>+61-2 3456 7890</span>
          </Link>
          <div className={styles.border}></div>
          <Link className={styles.phoneLink} href="mailto:hellodemo@gmail.com">
            <BsEnvelopeOpen />
            <span>hellodemo@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const header = document.getElementById("headerList");
      if (header && !header.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.topHeader}>
        <TopHeader />
      </div>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link href="/">Travel</Link>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={styles.hamburger}
            >
              {isOpen ? <IoClose /> : <CiMenuFries />}
            </div>
            <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
              {<NavList isOpen={isOpen} setIsOpen={setIsOpen} />}
              <Link href="/contact-us" className={styles.quoteBtn}>
                Get a quote
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
