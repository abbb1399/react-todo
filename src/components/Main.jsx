import React, { useContext } from "react";
import styles from "./Main.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";

export default function Main() {
  const { todos, filter, deleteTodo, updateTodo, darkMode } =
    useContext(TodoContext);

  let filteredTodos = [];

  if (filter === "active") {
    filteredTodos = todos.filter((todo) => !todo.checked);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.checked);
  } else if (filter === "all") {
    filteredTodos = todos;
  }

  const handleChange = (index) => {
    updateTodo(index);
  };

  return (
    <main
      className={styles.main}
      style={darkMode ? { background: "grey" } : { background: "aquamarine" }}
    >
      {filteredTodos.map((item) => {
        return (
          <div key={item.index} className={styles.items}>
            <input
              type="checkbox"
              value={item.checked}
              checked={item.checked}
              onChange={() => handleChange(item.index)}
            />
            <span>{item.title}</span>
            <BsFillTrashFill onClick={() => deleteTodo(item.index)} />
          </div>
        );
      })}
    </main>
  );
}
