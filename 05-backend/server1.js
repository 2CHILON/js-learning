import express from "express";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

let todos = [];
let nextId = 1;

// READ all
app.get("/todos", (req, res) => {
  res.json(todos);
});

// READ one
app.get("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

// CREATE
app.post("/todos", (req, res) => {
  const title = req.body?.title;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "title is required" });
  }

  const todo = { id: nextId++, title: title.trim(), done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { title, done } = req.body ?? {};
  if (title !== undefined) todo.title = title;
  if (done !== undefined) todo.done = done;

  res.json(todo);
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  res.status(204).end();
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));