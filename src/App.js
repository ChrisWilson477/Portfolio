import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

//styling imports
import './style.css';
import'./media_queries.css';

const App = () => {
	return (
		<div>
			<Home />
			{/* <AboutMe /> */}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
