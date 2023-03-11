import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="add Todo"
        />
        <button>Add</button>
      </form>
    </footer>
  );
}
