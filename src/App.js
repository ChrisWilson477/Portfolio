import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

//styling imports
import './css/style.css';
import './css/media_queries.css';

const App = () => {
	return (
		<div className="App">
			<header>
					<Navbar />
			  	<Home />
			</header>
			<div className="Container">
				<AboutMe />
				{/* <Professional /> */}
				{/* <Personal /> */}
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
