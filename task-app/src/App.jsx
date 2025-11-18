import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";
import "./App.css";
import { FilterSection } from "./components/FilterSection";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("latest");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <div className="flex flex-col w-full p-12 space-y-2">
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <FilterSection/>
        <hr />
        <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
      </div>
    </div>
  );
}

export default App;
