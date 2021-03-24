import React from 'react';

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
					<p>Built eCommerce clothing page as part of a small team </p>
					<p>
						<strong>Technology Used:</strong> JavaScript, Node/ExpressJS, React,
						Bootstrap, CSS, Docker, AWS EC2
					</p>
				</div>
				<div className="col span-1-of-3 project-box">
					<img src="#" href="#" alt="Project2" />
					<h4>Description</h4>
					<p>
						Built out an Express Server and PSQL database for existing front-end
					</p>
					<p>
						<strong>Technology Used:</strong> JavaScript, Node/ExpressJS,
						PostgreSQL, React, Docker, AWS EC2
					</p>
				</div>
				<div className="col span-1-of-3 project-box">
					<img src="#" href="#" alt="Project1" />
					<h4>Description</h4>
					<p>Built a mobile app to track moods for daily use</p>
					<p>
						<strong>Technology Used:</strong> JavaScript, Node/ExpressJS, React
						Native, React Hooks, CSS, AWS Amplify
					</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
