import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { addTodo } = useContext(TodoContext);

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
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
