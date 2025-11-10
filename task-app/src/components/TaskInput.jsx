import { useState } from "react"
export function TaskInput({tasks, setTasks}) {
	const [task, setTask] = useState("");
	const [subject, setSubject] = useState("Teori Kompleksitas");

	function changeTask(event) {
		setTask(event.target.value);
	};
	function submitTask() {
		setTasks([
			...tasks,
			{
				content : task,
				subject : subject,
				id : crypto.randomUUID()
			}
		]);
		setTask("");
		console.log(tasks);
	};

	function keyHandler(event) {
		if (event.key === "Enter") {
			submitTask();
		} else if (event.key === "Escape") {
			setTask("");
		}
	};

	function changeSubject(event) {
		setSubject(event.target.value);
	};

	return (
		<div>
			<input onChange={changeTask} value={task} placeholder="Insert your task here!" onKeyDown={keyHandler} required></input>
			<select id="car-select" onChange={changeSubject} value={subject}>
				<option selected value="Teori Kompleksitas">Teori Kompleksitas</option>
				<option value="Struktur Data">Struktur Data</option>
				<option value="Basis Data">Basis Data</option>
				<option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
			</select>
			<button onClick={submitTask}>Submit</button>
		</div>
	)
}