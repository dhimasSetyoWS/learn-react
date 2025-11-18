export function Task({ task, setTasks }) {
  function updateStatus(id, newStatus) {
    setTasks((prevTask) => prevTask.map((task) => (task.id === id ? { ...task, finish: newStatus } : task)));
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 mx-auto">
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <span className="text-sm font-medium text-slate-600 flex justify-between">
          <select value={task.finish} onChange={(e) => updateStatus(task.id, e.target.value === "true")} className={`rounded-md ${task.finish ? "bg-green-500" : "bg-slate-800"} py-1 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm`}>
            <option value="true" className="bg-slate-800">
              Finish
            </option>
            <option value="false" className="bg-slate-800">
              Progress
            </option>
          </select>
          <button className="cursor-pointer" onClick={() => deleteTask(task.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
          {/* <span className={`rounded-md ${task.finish ? "bg-green-500" : "bg-slate-800"} py-1 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm`}>{task.finish ? "Finish" : "Progress"}</span> */}
        </span>
      </div>

      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">{task.content}</h5>
        <p className="text-slate-600 leading-normal font-light">{task.subject}</p>
      </div>
      <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
        <span className="text-sm text-slate-600 font-medium">Created at : {task.createdAt}</span>
      </div>
    </div>
  );
}
