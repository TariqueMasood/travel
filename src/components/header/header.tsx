"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { EventHandler, useEffect, useState } from "react";

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
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h2>
            <Link href="/">
              <span>D</span>esignStudio
            </Link>
          </h2>
          <div onClick={() => setIsOpen(!isOpen)} className={styles.menu}>
            {isOpen ? <IoClose /> : <CiMenuFries />}
          </div>
        </div>

        <ul className={`${styles.headerList} ${isOpen && styles.active}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About&nbsp;Us</Link>
          </li>
          <li>
            <Link href="/client">Client</Link>
          </li>
          <li>
            <Link href="/vacancy">Vacancies</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact&nbsp;Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
