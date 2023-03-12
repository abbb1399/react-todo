import React, { useContext } from "react";
import styles from "./Header.module.css";
import { BsFillSunFill } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";

export default function Header() {
  const { filtetStatus, filter, toggleDarkMode } = useContext(TodoContext);
  const setBgColor = (status) => {
    if (filter === status) {
      return { background: "red" };
    } else {
      return { background: "grey" };
    }
  };

  return (
    <header className={styles.header}>
      <span>
        <BsFillSunFill onClick={() => toggleDarkMode()} />
      </span>
      <div className={styles.headerList}>
        <span style={setBgColor("all")} onClick={() => filtetStatus("all")}>
          All
        </span>
        <span
          style={setBgColor("active")}
          onClick={() => filtetStatus("active")}
        >
          Active
        </span>
        <span
          style={setBgColor("completed")}
          onClick={() => filtetStatus("completed")}
        >
          Completed
        </span>
      </div>
    </header>
  );
}
