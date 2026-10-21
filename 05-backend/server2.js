import express from "express";

const app = express();
// NEW: middleware 1 , logger
function logger(req, res, next) {
    const start = Date.now();

    res.on("finish", () => {
        const ms =  Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${ms}ms`);

    });
    next();
}
// NEW: middleware 2 , API key check
function requireApiKey(req, res, next) {
    if (req.method === "GET" && req.path === "/health") {
        return next();
    }

    if (req.headers["x-api-key"] !== "secret123") {
        return res.status(401).json({ error: "Unauthorized" });
    }

    next();
}

app.use(logger);
app.use(requireApiKey);
app.use(express.json());


let todos = [];
let nextId = 1;

// NEW: public route
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});


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

//NEW: middleware 3, 404 handler . It goes AFTER all routes.
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));