import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <input placeholder="add Todo" />
      <button>Add</button>
    </footer>
  );
}
