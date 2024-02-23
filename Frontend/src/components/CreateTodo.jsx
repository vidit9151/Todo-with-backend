import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
        />
        <br />
        <br />
        <input
          style={{ height: "1.5rem", borderRadius: "10px" }}
          type="text"
          placeholder="              description"
          id="description"
          onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
          }}
        />
        <br />
        <br />
        <button
          style={{ width: "11rem", color: "#ddede1", fontSize: ".8rem" }}
          type="button"
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({ title, description }),
              headers: { "content-type": "application/json" },
            }).then(async (res) => {
              const json = await res.json();
              alert("todo added");
            });
          }}
        >
          Add todo
        </button>
      </fieldset>
    </section>
  );
};

export default CreateTodo;
