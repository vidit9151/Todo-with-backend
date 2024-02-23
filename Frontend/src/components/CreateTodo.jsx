const CreateTodo = () => {
  return (
    <section style={{ margin: "5rem 5rem 0rem 5rem" }}>
      <fieldset>
        <legend>
          <h4 style={{ color: "#ddede1" }}>Title & Description</h4>
        </legend>
        <input
          style={{ height: "1.5rem", borderRadius: "10px" }}
          type="text"
          placeholder="                   title"
          id="title"
        />
        <br />
        <br />
        <input
          style={{ height: "1.5rem", borderRadius: "10px" }}
          type="text"
          placeholder="              description"
          id="description"
        />
        <br />
        <br />
        <button
          style={{ width: "11rem", color: "#ddede1", fontSize: ".8rem" }}
          type="button"
        >
          Add todo
        </button>
      </fieldset>
    </section>
  );
};

export default CreateTodo;
