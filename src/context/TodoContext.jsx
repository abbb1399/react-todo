import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodo] = useState([
    {
      checked: false,
      title: "운동하기",
    },
    {
      checked: true,
      title: "청소하기",
    },
  ]);

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
}
