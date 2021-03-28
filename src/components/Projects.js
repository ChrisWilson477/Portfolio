import React from 'react';

//Icons
import {
	FaBootstrap,
	FaJsSquare,
	FaNodeJs,
	FaDocker,
	FaAws,
	FaReact,
	FaCss3Alt,
	FaHtml5,
} from 'react-icons/fa';

import { SiPostgresql } from 'react-icons/si';

//Images
import Dignus from '../images/Dignus.jpg';

const Projects = () => {
	return (
		<div className="projects-section" id="Projects">
			<div className="row">
				<h3>Check out some of my projects!</h3>
			</div>
			<div className="row projects">
				<div className="col span-1-of-3 project-box">
					<div className='projects-gifs'>
						<iframe src="https://giphy.com/embed/Ka3MQfalG5G8fa1GqO" width="100%" height="100%" style={{ position:'absolute' }} frameBorder="0" >
						</iframe>
					</div>
					<h4>Description</h4>
					<p>
						Built pure HTML5/CSS3 responsive mock home workout plan site
					</p>
					<p>
					<a target='_blank' href="https://superflexmock.herokuapp.com/">Live Site</a>
					{' '}|{' '}
						<a target='_blank' href="https://github.com/ChrisWilson477/PureHTMLCSS">GitHub</a>
					</p>
					<p>
						<strong>Technology Used:</strong>
					</p>
					<ul>
						<li>
							<FaJsSquare size="45px" title="Javascript" className="js-icon" />
						</li>
						<li>
							<FaHtml5 size="45px" title="HTML5" className="html-icon" />
						</li>
						<li>
							<FaCss3Alt size="45px" title="CSS" className="css-icon" />
						</li>
					</ul>
				</div>
				<div className="col span-1-of-3 project-box">
				<div className='projects-gifs'><iframe src="https://giphy.com/embed/QA6Tq9sXzA6GoIRgUG" width="100%" height="100%" style={{position:'absolute'}}frameBorder="0"></iframe></div>
					<h4>Description</h4>
					<p>
						Built a mobile app with React Native to track moods for daily use
					</p>
					<p>
						<a
							target="_blank"
							href="https://github.com/ChrisWilson477/DignusWellbeing"
						>
							GitHub
						</a>
					</p>
					<p>
						<strong>Technology Used:</strong>
					</p>
					<ul>
						<li>
							<FaJsSquare size="45px" title="Javascript" className="js-icon" />
						</li>
						<li>
							<FaNodeJs size="45px" title="Node.js" className="node-icon" />
						</li>
						<li>
							<FaReact size="45px" title="React" className="react-icon" />
						</li>
						<li>
							<FaCss3Alt size="45px" title="CSS" className="css-icon" />
						</li>
						<li>
							<FaHtml5 size="45px" title="HTML5" className="html-icon" />
						</li>
						<li>
							<FaAws
								size="45px"
								title="Amazon Web Services"
								className="aws-icon"
							/>
						</li>
					</ul>
				</div>

				<div className="col span-1-of-3 project-box">
				<div className='projects-gifs'><iframe src="https://giphy.com/embed/O15A4DolpOBH7f4Cqw" width="100%" height="100%" style={{ position:'absolute' }} frameBorder="0"></iframe></div>
					<h4>Description</h4>
					<p>
						Built out an Express Server and PSQL database for existing front-end
					</p>
					<p>
						<a target='_blank' href="https://github.com/ChrisWilson477/SDC-ProductOverview">GitHub</a>
					</p>
					<p>
						<strong>Technology Used:</strong>
					</p>
					<ul>
						<li>
							<FaJsSquare size="45px" title="Javascript" className="js-icon" />
						</li>
						<li>
							<FaNodeJs size="45px" title="Node.js" className="node-icon" />
						</li>
						<li>
							<FaReact size="45px" title="React" className="react-icon" />
						</li>
						<li>
							<SiPostgresql
								size="45px"
								title="PostgreSQL"
								className="postgresql-icon"
							/>
						</li>
						<li>
							<FaDocker size="45px" title="Docker" className="docker-icon" />
						</li>
						<li>
							<FaAws
								size="45px"
								title="Amazon Web Services"
								className="aws-icon"
							/>
						</li>
					</ul>
				</div>

			</div>
		</div>
	);
};

export default Projects;
