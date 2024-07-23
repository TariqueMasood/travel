"use client";

import { useEffect, useState } from "react";
import styles from "./scroll-btn.module.css";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (typeof window !== "undefined") {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    }
  };

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
      return () => {
        window.removeEventListener("scroll", toggleVisible);
      };
    }
  }, []);

  return (
    <button
      className={styles.scrollButton}
      type="button"
      style={{ display: visible ? "block" : "none" }}
      onClick={scrollTop}
    >
      <span className={styles.tooltiptext}>Scroll to Top</span>
      <IoIosArrowRoundUp />
    </button>
  );
};

export default ScrollBtn;
