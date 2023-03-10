import React from "react";
import styles from "./Main.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function Main() {
  return (
    <main className={styles.main}>
      <div>
        <input type="checkbox" />
        <span>공부하기</span>
      </div>
      <BsFillTrashFill />
    </main>
  );
}
