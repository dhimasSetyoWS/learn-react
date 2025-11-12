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
    <div className='app'>
      <TaskInput tasks={tasks} setTasks={setTasks}/>
	  <hr />
      <TaskList tasks={tasks}></TaskList>
    </div>
  )
}

export default App
