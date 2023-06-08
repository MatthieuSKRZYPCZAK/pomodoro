import { useContext } from 'react';
import { TasksContext } from './Contexts/Tasks';
import TaskRow from './TaskRow';
import style from './TimersTable.module.css';

function TimersTable() {


	const { tasksData, removeTask } = useContext(TasksContext);

	return (
		<>

			<table className={style['timers-table']}>
				<thead>
					<tr>
						<th>Date</th>
						<th>Tâche</th>
						<th>Description</th>
						<th>Temps</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						tasksData.tasks.map((task, index) => (
							<TaskRow task={ task } index={ index } removeTask={ removeTask } key={ Date.parse(task.date) - index } />
						))
					}
				</tbody>
			</table>
		</>
	);
}

export default TimersTable;