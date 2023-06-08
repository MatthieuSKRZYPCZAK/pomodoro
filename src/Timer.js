import { useContext, useState } from 'react';
import ClockDisplay from './ClockDisplay';
import useTimer from './hooks/useTimer';
import TaskForm from './TaskForm';
import style from './Timer.module.css';
import TimerText from './TimerText';
import { TasksContext } from './Contexts/Tasks';

function Timer() {

	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const { time, startTimer, stopTimer } = useTimer();

	const { addTask } = useContext(TasksContext);

	const handleStartTimer = ({ title, description }) => {
		if (isTimerStarted) {
			const savedTime = stopTimer();
			addTask({ 
				time: savedTime,
				date: new Date(), 
				title, 
				description
			});
			
			setIsTimerStarted(false);

		} else { 

			setIsTimerStarted(true);
			startTimer();

		}
	}

	return (
		<>
			<ClockDisplay time={ time } className={ style['clock-timer'] } />
			<TaskForm isTimerStarted={ isTimerStarted } onSubmit={ handleStartTimer } />
			<TimerText isTimerStarted={ isTimerStarted } />
		</>
	);
}

export default Timer;