import { memo } from 'react';

function TimerText({ isTimerStarted }) {

	return (
		<p>
			{ isTimerStarted ? 'Le minuteur est démarré' : 'Le minuteur est arrêté' }
		</p>
	);
}

export default memo(TimerText);