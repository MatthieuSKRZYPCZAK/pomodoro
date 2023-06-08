import { memo } from "react";
import ClockDisplay from "./ClockDisplay";

function TaskRow({ task, index, removeTask }) {

	return (
		<tr>
			<td>Le { task.date.toLocaleDateString() } à { task.date.toLocaleTimeString() }</td>
			<td>{ task.title }</td>
			<td>{ task.description }</td>
			<td><ClockDisplay time={ task.time } /></td>
			<td><button onClick={ () => removeTask(index) }>Supprimer</button></td>
		</tr>
	);
}

export default memo(TaskRow, (prevProps, nextProps) => {
	if (prevProps.task === nextProps.task || prevProps.index === nextProps.index) {
		return true;
	}
	return false;
});