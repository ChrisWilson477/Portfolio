import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Professional from './components/Professional';
// import Personal from './components/Personal'
import Contact from './components/Contact'

//styling imports
import './css/style.css';
import './css/media_queries.css';
import './css/grid.css';
import {FaLinkedin, FaInstagram, FaFacebookSquar, FaEnvelope } from 'react-icons/fa'

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
				<Contact />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
