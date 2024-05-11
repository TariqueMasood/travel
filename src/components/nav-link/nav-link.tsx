import Link from "next/link";
import React from "react";
import styles from "./nav-link.module.css";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about-us",
  },
  {
    label: "Client",
    path: "/client",
  },
  {
    label: "Vacancies",
    path: "/vacancies",
  },
  {
    label: "Contact",
    path: "/contact-us",
  },
];

type NavLinkProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <>
      {links?.map((link) => (
        <li
          key={link.label}
          className={styles.navItem}
          onClick={() => props.setIsOpen(!props.isOpen)}
        >
          <Link href={link?.path} className={styles.navLink}>
            {link?.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLink;
