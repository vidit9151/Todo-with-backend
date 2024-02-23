const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();
app.use(express.json());
//zod obj after safe parse {success:true,data} {success:false ,err}
app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "you send the wrong inputs" });
    return;
  }
  //put in mongo db
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updatePayload.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "you send the wrong inputs" });
  }
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
