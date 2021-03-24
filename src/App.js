import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer'

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
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
