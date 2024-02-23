const CreateTodo = () => {
  return (
    <section>
      <label htmlFor="title">
        <h3 style={{ display: "inline-block" }}>Title:</h3>
      </label>
      <input
        style={{ height: "1.5rem", borderRadius: "10px" }}
        type="text"
        placeholder="title"
        id="title"
      />{" "}
      <br />
      <label htmlFor="description">
        <h3 style={{ display: "inline-block" }}>Description:</h3>
      </label>
      <input
        style={{ height: "1.5rem", borderRadius: "10px" }}
        type="text"
        placeholder="description"
        id="description"
      />
      <br />
      <button type="button">Add a todo</button>
    </section>
  );
};

export default CreateTodo;
