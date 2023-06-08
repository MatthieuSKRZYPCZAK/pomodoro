import Timer from './Timer';
import TimersTable from './TimersTable';
import style from './App.module.css';
import { useContext } from 'react';
import useTimeParser from './hooks/useTimeParser';
import { ThemeContext } from './Contexts/Theme';
import DarkMode from './DarkMode';


function App() {

	const { theme } = useContext(ThemeContext);

	const { parseSecondsToHMS } = useTimeParser();

	const displayTimerDetails = (timer) => {
		alert(`${timer.date.toLocaleDateString()} at ${timer.date.toLocaleTimeString()} \n${parseSecondsToHMS(timer.time)}`);
	}

	return (
		<div className={ `${style.container} ${style[theme]}` }>
			<DarkMode />
			<h1 className={ style['main-title'] }>Pomodoro Application</h1>
			<Timer />
			
			
			<TimersTable onDisplayTimerDetails={ displayTimerDetails } />
		</div>
	);
}

export default App;