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
					<img src="#" href="#" alt="Project1" />
					<h4>Description</h4>
					<p>
						Built eCommerce clothing page using React as part of a small team{' '}
					</p>
					<p>
						<a href="">GitHub</a>
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
							<FaDocker size="45px" title="Docker" className="docker-icon" />
						</li>
					</ul>
				</div>
				<div className="col span-1-of-3 project-box">
					<img src="#" href="#" alt="Project2" />
					<h4>Description</h4>
					<p>
						Built out an Express Server and PSQL database for existing front-end
					</p>
					<p>
						<a href="">GitHub</a>
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
				<div className="col span-1-of-3 project-box">
					<a target='_blank' href="https://github.com/ChrisWilson477/DignusWellbeing">
						<img src={Dignus} alt="Dignus Wellbeing" />
					</a>
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
			</div>
		</div>
	);
};

export default Projects;
