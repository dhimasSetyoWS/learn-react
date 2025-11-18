import { Task } from "./Task"
export function TaskList({tasks, setTasks}) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 ">
			{tasks.length > 0 && tasks.map((task, index) => {
				return <Task key={index} task={task} setTasks={setTasks}/>
			})}
			{tasks.length === 0 && (
				<p className="text-red-950">Saat ini tidak ada tugas! Bagus!</p>
			)}
		</div>
	)
}