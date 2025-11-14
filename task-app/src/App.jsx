import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      content: "Membandingkan waktu eksekusi merge sort dan quick sort",
      subject: "Teori Kompleksitas",
      status: "pending",
      priority : 1
    },
    {
      id: crypto.randomUUID(),
      content: "Membandingkan waktu eksekusi merge sort dan quick sort",
      subject: "Teori Kompleksitas",
      status: "progress",
      priority : 2
    },
    {
      id: crypto.randomUUID(),
      content: "Membandingkan waktu eksekusi merge sort dan quick sort",
      subject: "Teori Kompleksitas",
      status: "finished",
      priority : 3
    },
  ]);
  let status = "Aman";
  if (tasks.length >= 5) {
    status = "PEMALAS KAU??!!";
  } else if (tasks.length >= 3) {
    status = "Bahaya kalau di tumpuk!";
  }
  return (
    <div className="app">
      <div className="task-container">
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <hr />
        <TaskList tasks={tasks}></TaskList>
      </div>
      <div className="avatar-container">
        <p className="avatar">{status}</p>
      </div>
    </div>
  );
}

export default App;
