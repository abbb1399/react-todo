import React from "react";
import styles from "./Header.module.css";
import { BsFillSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className={styles.header}>
      <span>
        <BsFillSunFill />
      </span>
      <div className={styles.headerList}>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
    </header>
  );
}
