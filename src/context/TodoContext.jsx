import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
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

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
