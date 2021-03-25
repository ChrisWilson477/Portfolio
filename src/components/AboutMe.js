import React from 'react';
import Photo from '../images/me.jpg';
import Slide from './react-reveal/Slide';
import Zoom from './react-reveal/Zoom';

const AboutMe = () => {
	return (
		<div className="about-me-section" id="AboutMe">
			<div className="row">
				<h3> Let me tell you a little about myself! </h3>
			</div>
			<div className="row about-me-paragraph">
				<div className="col span-1-of-3 box">
					<Zoom delay={1000}>
						<img src={Photo} alt="Photo of Chris" />
					</Zoom>
				</div>
				<div className="col span-2-of-3 box">
					<Slide right delay={1000}>
						<p>
							Motivated by the pursuit of exploration, a love of innovation has
							pushed me into the beautiful world of full stack web development.
							My strength lies in the Javascript language but I have a great
							learning capacity and am constantly expanding my technical
							toolbelt with frameworks and languages. As a U.S. Army veteran, I
							have been equipped with an extensive array of leadership,
							team-building and problem solving skills vital to any company. And
							as a person, I am passionate, outgoing and love to work hard.
						</p>
						<br />
						<p>
							When I'm not coding I enjoy exploring the world and learning about
							new cultures when I can. I've been to over 15 different countries
							and possess a definite wanderlust mentality. When I am home, I
							tend to enjoy my weekends outdoors hiking, camping or at a local
							brewery and my weekends indoors playing guitar, gaming or deep in
							a DnD conquest.
						</p>
						<br />
						<p>
							I am looking for a software engineering position in Colorado, a
							remote position or would consider the possibility of relocation
						</p>
					</Slide>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
