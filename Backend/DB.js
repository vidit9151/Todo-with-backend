const mongoose = require("mongoose");
const { string } = require("zod");
//suppose to be in .env
mongoose.connect(
  "mongodb+srv://vidit9151:ieYRyeTDYGe0E7xt@cluster0.i3etzei.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todos", todoSchema);
module.exports = { todo };
