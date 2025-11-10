import { Task } from "./Task"
export function TaskList({tasks}) {
	return (
		<>
			{tasks.map((task) => {
				return <Task content={task.content} subject={task.subject}/>
			})}
		</>
	)
}