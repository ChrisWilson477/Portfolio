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
				<h3>I would love to hear from you!</h3>
			</div>
			<div className="row ">
				<div className="col">
					<p className="contact-paragraph">
						If you are looking for an addition to your team, have a project in
						mind that needs building, or just want to chat, don't hesitate to
						reach out to me on any of the following platforms!
					</p>
				</div>
			</div>
			<div className="row">
				<ul className="social-icons">
					<li>
						<a target="_blank" href="mailto:ChrisWilson477@gmail.com">
							<FaEnvelope size="45px" className="message-icon" />
						</a>
					</li>

					<li>
						<a target="_blank" href="https://www.linkedin.com/in/chriswilson477/">
							<FaLinkedin size="45px" className="linkedin-icon" />
						</a>
					</li>

					<li>
						<a target="_blank" href="https://facebook.com/cawillison">
							<FaFacebookSquare size="45px" className="facebook-icon" />
						</a>
					</li>

					<li>
						<a target="_blank" href="https://instagram.com/jimmyjangles10">
							<FaInstagram size="45px" className="instagram-icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
