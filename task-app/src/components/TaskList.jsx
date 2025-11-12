import { Task } from "./Task"
export function TaskList({tasks}) {
	return (
		<div className="list-of-tasks">
			{tasks.map((task) => {
				return <Task content={task.content} subject={task.subject}/>
			})}
		</div>
	)
}