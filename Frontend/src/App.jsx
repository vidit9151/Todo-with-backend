import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  let date = new Date();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => {
        const response = res.json();
        return response;
      })
      .then((res) => {
        setTodos(res.todos);
      });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <div
        style={{
          fontSize: "1.5rem",
          color: "grey",
          textAlign: "center",
          position: "absolute",
        }}
      >
        ({date.getDate()}/{date.getMonth()}/ {date.getFullYear()})
      </div>
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <CreateTodo />
        </div>
        <div>
          {todos.length != 0 ? <Todos todos={todos} /> : "(Todo List empty)"}
        </div>
      </div>
    </>
  );
}

export default App;
