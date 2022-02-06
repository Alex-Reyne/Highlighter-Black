import { stringify } from 'querystring';
import { useState } from 'react';

export default function Hello() {
	const [currentTime, setCurrentTime] = useState('');

	setInterval(() => {
		setCurrentTime(new Date().toLocaleString().replace(/,/g, ''));
	}, 1000);

	return <p className='time '>{currentTime}</p>;
}
