import "./Task.css";
export function Task({content, subject}){
	return (
		<div className="blob">
			<p>Task : {content}</p>
			<small>{subject}</small>
		</div>
	)
}