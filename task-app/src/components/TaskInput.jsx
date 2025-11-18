import dayjs from "dayjs";
import { useState } from "react";
export function TaskInput({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  const [subject, setSubject] = useState("Teori Kompleksitas");

  function changeTask(event) {
    setTask(event.target.value);
  }
  function submitTask() {
    if (task.length > 5) {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          content: task,
          subject: subject,
          finish: false,
          createdAt: dayjs().format("DD MMMM YYYY"),
        },
      ]);
      setTask("");
      console.log(tasks);
    }
  }

  function keyHandler(event) {
    if (event.key === "Enter") {
      submitTask();
    } else if (event.key === "Escape") {
      setTask("");
    }
  }

  function changeSubject(event) {
    setSubject(event.target.value);
  }
  const tugasNumpuk = tasks.filter(task => task.finish == false).length;

  let status = "https://media1.tenor.com/m/-gjcOyhsUacAAAAd/cat-kitty.gif";
  if (tugasNumpuk >= 5) {
    status = "https://media1.tenor.com/m/YC7Pina09PkAAAAC/enojado.gif";
  } else if (tugasNumpuk >= 3) {
    status = "https://media1.tenor.com/m/7oJPa53XCMkAAAAd/side-eye-dog.gif";
  }
  return (
    <div className="space-x-8 space-y-8 lg:flex justify-between overflow-x-hidden">
      <div className="form-container w-full space-y-4">
        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={changeTask} value={task} placeholder="Insert your task here!" onKeyDown={keyHandler} required></input>

        <select id="car-select" onChange={changeSubject} value={subject} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
          <option selected value="Teori Kompleksitas">
            Teori Kompleksitas
          </option>
          <option value="Struktur Data">Struktur Data</option>
          <option value="Basis Data">Basis Data</option>
          <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
        </select>
        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:cursor-pointer hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={submitTask}>
          Submit
        </button>
      </div>
      <div className="reaction w-lg max-h-sm">
        <img className="lg:mx-auto w-48 h-48 rounded-lg" src={status} alt="" />
      </div>
    </div>
  );
}
