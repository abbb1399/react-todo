import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [filter, setFilter] = useState("all");
  const [todos, setTodo] = useState([
    {
      index: 0,
      checked: false,
      title: "운동하기",
    },
    {
      index: 1,
      checked: true,
      title: "청소하기",
    },
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  const addTodo = (newTodo) => {
    setTodo((todos) => [
      ...todos,
      { index: todos.length, checked: false, title: newTodo },
    ]);
  };

  const updateTodo = (index) => {
    setTodo((todos) =>
      todos.map((todo) => {
        if (todo.index === index) {
          return { ...todo, checked: !todo.checked };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (index) => {
    setTodo((todos) => todos.filter((todo) => todo.index !== index));
  };

  const filtetStatus = (status) => {
    setFilter(status);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        darkMode,
        addTodo,
        deleteTodo,
        updateTodo,
        filtetStatus,
        toggleDarkMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
