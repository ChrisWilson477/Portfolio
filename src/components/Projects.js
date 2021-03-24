import React from 'react';

//Icons
import {FaBootstrap,
  FaJsSquare,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaReact,
  FaCss3Alt,
  FaHtml5 } from 'react-icons/fa';

 import { SiPostgresql } from 'react-icons/si';



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
					<p><a href=''>GitHub</a></p>
					<p>
						<strong>Technology Used:</strong>
            </p>
            <ul>
              <li><FaJsSquare size='45px' title='Javascript'/></li>
              <li><FaNodeJs size='45px' title='Node.js'/></li>
              <li><FaReact size='45px' title='React'/></li>
              <li><FaCss3Alt size='45px' title='CSS'/></li>
              <li><FaHtml5 size='45px' title='HTML5'/></li>
              <li><FaDocker size='45px' title='Docker'/></li>

            </ul>
				</div>
				<div className="col span-1-of-3 project-box">
					<img src="#" href="#" alt="Project2" />
					<h4>Description</h4>
					<p>
						Built out an Express Server and PSQL database for existing front-end
					</p>
					<p><a href=''>GitHub</a></p>
					<p>
						<strong>Technology Used:</strong>
					</p>
					<ul>
              <li><FaJsSquare size='45px' title='Javascript'/></li>
              <li><FaNodeJs size='45px' title='Node.js'/></li>
              <li><FaReact size='45px' title='React'/></li>
              <li><FaAws size='45px' title='Amazon Web Services'/></li>
              <li><SiPostgresql size='45px' title='PostgreSQL' /></li>
              <li><FaDocker size='45px' title='Docker' /></li>

            </ul>
				</div>
				<div className="col span-1-of-3 project-box">
					<img src="#" href="#" alt="Project1" />
					<h4>Description</h4>
					<p>Built a mobile app to track moods for daily use</p>
					<p><a href=''>GitHub</a></p>
					<p>
						<strong>Technology Used:</strong>
					</p>
					<ul>
              <li><FaJsSquare size='45px' title='Javascript'/></li>
              <li><FaNodeJs size='45px' title='Node.js'/></li>
              <li><FaReact size='45px' title='React'/></li>
              <li><FaAws size='45px' title='Amazon Web Services'/></li>
							<li><FaCss3Alt size='45px' title='CSS'/></li>
              <li><FaHtml5 size='45px' title='HTML5'/></li>
            </ul>
				</div>
			</div>
		</div>
	);
};

export default Projects;
