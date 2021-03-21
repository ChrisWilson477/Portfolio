import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

//styling imports
import './style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Home />
				</Col>
			</Row>

		</Container>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
