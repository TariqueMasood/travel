import Link from "next/link";
import React from "react";
import styles from "./nav-list.module.css";
import NavLink from "../nav-link/nav-link";
import { IoClose } from "react-icons/io5";

type NavListProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NavList = (props: NavListProps) => {
  return (
    <>
      {props.isOpen && (
        <div
          className={`${styles.mobileHeader} ${props.isOpen && styles.show}`}
        >
          <div>Travel</div>
          <div
            onClick={() => props.setIsOpen(!props.isOpen)}
            className={styles.closeIcon}
          >
            <IoClose />
          </div>
        </div>
      )}
      <ul className={styles.navList}>
        <NavLink isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
      </ul>
      {props.isOpen && (
        <div
          className={styles.overlay}
          onClick={() => props.setIsOpen(!props.isOpen)}
        ></div>
      )}
    </>
  );
};

export default NavList;
