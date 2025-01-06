import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts/Todocontext";
import Todoform from "./components/Todoform";
import TodoItem from "./components/TodoItem";
function App() {
  const [todos, setTodos] = useState([]);
  const addtodoItem = (todo) => {
    setTodos((prev) => [
      ...prev,
      { ...todo, id: Date.now()},
    ]);
  };
  const removetodoItem = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const edittodoItem = (id, newTodo) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? newTodo : todo)));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addtodoItem,
        removetodoItem,
        edittodoItem,
        toggleComplete,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
