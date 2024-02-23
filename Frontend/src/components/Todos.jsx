const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map(({ title, description, completed }, index) => {
        return (
          <>
            <h2>
              <span style={{ color: "#fff", fontSize: "1.1rem" }}>
                {index + 1} -{" "}
              </span>{" "}
              {title}
            </h2>
            <p style={{ color: "grey" }}>
              {" "}
              <span style={{ color: "#fff", fontSize: "1rem" }}>
                Description:
              </span>{" "}
              {description}
            </p>
            <button
              style={{ fontSize: ".7rem" }}
              type="button"
              onClick={() => {}}
            >
              {completed ? "undone" : "done"}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Todos;
