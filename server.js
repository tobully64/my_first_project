const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: "Finish project API", completed: false },
  { id: 2, title: "Prepare Docker setup", completed: false }
];

app.get("/", (req, res) => {
  res.send("Smart Team Task Manager API is running");
});

app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
