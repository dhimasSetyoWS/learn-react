import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
		{
			id : crypto.randomUUID(),
			content : "Membandingkan waktu eksekusi merge sort dan quick sort",
			subject : "Teori Kompleksitas",
		},
		{
			id : crypto.randomUUID(),
			content : "Membandingkan waktu eksekusi merge sort dan quick sort",
			subject : "Teori Kompleksitas",
		},
		{
			id : crypto.randomUUID(),
			content : "Membandingkan waktu eksekusi merge sort dan quick sort",
			subject : "Teori Kompleksitas",
		}
	]);
  return (
    <>
      <TaskInput tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App
