import React from 'react';
import MessagesSlider from '../Components/MessagesSlider';

const Desktop = () => {
	return (
		<div className="App-Desktop">
			<div className="header">
				<div className="header-date">
					<span>02/05/2021</span>
				</div>
				<div className="header-logo">
					<span>The Green Village</span>
				</div>
				<div className="header-time">
					<span>08:30</span>
				</div>
			</div>
			<div className="title changes">
				<h4 className="title-text">Timetable Changes</h4>
			</div>
			<div className="title system">
				<h4 className="title-text">System Messages</h4>
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
