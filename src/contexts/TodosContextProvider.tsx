import { createContext, useEffect, useState } from "react";
import type { Todo, TodosContextType } from "../lib/types";
// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";



export const TodosContext = createContext<TodosContextType | null>(null);

export default function TodosContextProvider({ children }: { children: React.ReactNode }) {
  // const { isAuthenticated } = useKindeAuth();

  // state
  const saveTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState<Todo[]>(saveTodos ? JSON.parse(saveTodos) : []);
  const [isLoading, setIsLoading] = useState(false);

  // derived state
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  // actions / event handlers
  const addTodo = (content: string) => {
    // check if user is logged in
    if (todos.length >= 3) {
      alert("To add more todos, please log in.");
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        completed: false,
      },
    ]);
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // side effects
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     setIsLoading(true);

  //     const response = await fetch(
  //       "https://bytegrad.com/course-assets/api/todos"
  //     );
  //     const todos = await response.json();
  //     setTodos(todos);

  //     setIsLoading(false);
  //   };

  //   fetchTodos();
  // }, []);

  // add todos for local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        isLoading,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}