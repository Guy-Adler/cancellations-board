import React, { useEffect, useState } from 'react';
import MessagesSlider from '../Components/MessagesSlider';
import kfarLogo from '../assets/kfarLogo.png';

const Desktop = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		setTimeout(() => setCurrentDate(new Date()), 1000)
	}, [currentDate])

	const getTime = date => {
		return `${date.getHours()}:${date.getMinutes()}`;
	}

	const getDate = date => {
		return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	}	

	return (
		<div className="App-Desktop">
			<div className="header">
				<div className="header-date">
					<span>{getDate(currentDate)}</span>
				</div>
				<div className="header-logo">
					<div>
					<img src={kfarLogo} alt="הכפר הירוק" height="5%"/>
					</div>
				</div>
				<div className="header-time">
					<span>{getTime(currentDate)}</span>
				</div>
			</div>
			<div className="title changes">
				<h4 className="title-text">הודעות כלליות</h4>
			</div>
			<div className="title system">
				<h4 className="title-text">הודעות מערכת</h4>
			</div>
			<div className="content changes">
				<MessagesSlider type="cancellations"/>
			</div>
			<div className="content system">
				<MessagesSlider type="system"/>
			</div>
		</div>
	)
}

export default Desktop
