"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavList from "../nav-list/nav-list";
import { MdLocationOn } from "react-icons/md";
import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

const TopHeader = () => {
  return (
    <div className="container">
      <div className={styles.topHeaderWrapper}>
        <div className={styles.locationIcon}>
          <MdLocationOn />
          <div>Hunsapura Near Dr.Sarfraz Kopagang (MAU)</div>
        </div>
        <div className={styles.phoneNumber}>
          <Link className={styles.phoneLink} href="tel:+91 9935177951">
            <BsTelephone />
            <span>+91 9935177951</span>
          </Link>
          <Link className={styles.phoneLink} href="tel:+91 9695410786">
            <BsTelephone /> <span>+91 9695410786</span>
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

  return (
    <>
      <div className={styles.topHeader}>
        <TopHeader />
      </div>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <Image width={120} height={40} src={logo} alt="Logo" />
              </Link>
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
