export function Task({content, subject}){
	return (
		<div>
			<p>Task : {content}</p>
			<small>{subject}</small>
		</div>
	)
}