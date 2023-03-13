import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Time from './components/Time/Time';

function App() {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((time) => time + 100);
			}, 100);
		}
		return () => clearInterval(interval);
	}, [isRunning]);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	const handleReset = () => {
		setTime(0);
		setIsRunning(false);
	};

	return (
		<Container>
			<Time time={time}></Time>
			<Button onClick={handleStart}>Start</Button>
			<Button onClick={handleStop}>Stop</Button>
			<Button onClick={handleReset}>Reset</Button>
		</Container>
	);
}

export default App;
