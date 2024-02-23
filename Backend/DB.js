const mongoose = require("mongoose");
const { string } = require("zod");
//suppose to be in .env
mongoose.connect(
  "mongodb+srv://usernameeee:password@cluster0.i3etzei.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todos", todoSchema);
module.exports = { todo: todo };
