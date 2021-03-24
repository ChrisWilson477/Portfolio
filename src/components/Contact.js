import React from 'react';
import {
	FaLinkedin,
	FaInstagram,
	FaFacebookSquare,
	FaEnvelope,
} from 'react-icons/fa';

const Contact = () => {
	return (
		<div className="contact-section" id="ContactMe">
			<div className="row">
				<h3>Please Reach out to me!</h3>
			</div>
			<div className="row contact-me-body">
				<div className="col">
					<p className="contact-paragraph">
						If you are looking for an addition to your team or have a project in
						mind that needs building, don't hesitate to reach out to me on any
						of the following platforms!
					</p>
				</div>
			</div>
			<div className="row">
				<ul className="social-icons">
					<li>
						<a target="_blank" href="mailto:ChrisWilson477@gmail.com">
							<FaEnvelope size="45px" />
						</a>
					</li>

					<li>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/chriswilson477/"
						>
							<FaLinkedin size="45px" />
						</a>
					</li>

					<li>
						<a target="_blank" href="https://facebook.com">
							<FaFacebookSquare size="45px" />
						</a>
					</li>

					<li>
						<a target="_blank" href="https://instagram.com">
							<FaInstagram size="45px" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
