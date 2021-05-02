import React from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Desktop from './views/Desktop';
import Mobile from './views/Mobile';

function App() {
	const isDesktop = useMediaQuery('(min-width:780px)');
	return (
	<>
	{isDesktop ? <Desktop /> : <Mobile />}
	</>
	);
}

export default App;
