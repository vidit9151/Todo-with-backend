import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
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
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
