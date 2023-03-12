import React, { useState, useContext } from "react";
import styles from "./Main.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";

export default function Main() {
  const { todos, deleteTodo, updateTodo } = useContext(TodoContext);

  // const [checked, setChecked] = useState(true);

  const handleChange = (index) => {
    // setChecked((prev) => !prev);

    updateTodo(index);
  };

  return (
    <main className={styles.main}>
      {todos.map((item, index) => {
        return (
          <div key={index} className={styles.items}>
            <input
              type="checkbox"
              value={item.checked}
              checked={item.checked}
              onChange={() => handleChange(index)}
            />
            <span>{item.title}</span>
            <BsFillTrashFill onClick={() => deleteTodo(index)} />
          </div>
        );
      })}
    </main>
  );
}
