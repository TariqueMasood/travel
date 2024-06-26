"use client";

import { useState } from "react";
import styles from "./scroll-btn.module.css";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollBtn = () => {
  if (typeof window !== "undefined") {
    // browser code
  }
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  function scrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleVisible);

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
