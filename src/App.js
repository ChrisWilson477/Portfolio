import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

//styling imports
import './css/style.css';
import'./css/media_queries.css';

const App = () => {
	return (
    <div className="App">

      <header>
        <nav>
          <div className='Row'>
            <img className='Nav-logo' alt='Logo' href='#' />
            <ul className='Nav-ul'>
              <li><a href='#Home'>Home</a></li>
              <li><a href='#About Me'>About Me</a></li>
              <li><a href='#Projects'>Projects</a></li>
              <li><a href='#ContactMe'>Contact Me</a></li>
            </ul>
					</div>
        </nav>
				<div>
					<Home />
				</div>
      </header>
      <div className='Container'>

          <AboutMe />
         {/* <Professional /> */}
				 {/* <Personal /> */}
      </div>
    </div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
