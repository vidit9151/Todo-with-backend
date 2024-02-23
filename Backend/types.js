const zod = require("zodod");
//expected inputs object{string,string}

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({ id: zod.string() });

module.exports = { createTodo, updateTodo };
