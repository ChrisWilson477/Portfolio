import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Professional from './components/Professional';

//styling imports
import './css/style.css';
import './css/media_queries.css';
import './css/grid.css';

const App = () => {
	return (
		<div className="App">
			<header>
					<Navbar />
			  	<Home />
			</header>
			<div className="Container">
				<AboutMe />
				<Professional />
				{/* <Personal /> */}
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
