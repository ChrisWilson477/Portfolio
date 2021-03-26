import React from 'react';
import BrainHeart from '../images/brainheart.png';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

const Home = () => {
	return (
		<div className="home">
			<div className="row">
				<div className="hero-text">
					<Fade delay={400}>
						<h1 className="home-left-text">
							<span className="highlight">Hi,</span> I'm Chris.
						</h1>
					</Fade>
					<Fade delay={2200}>
						<p className="home-paragraph-text">
							A <span className="highlight">full stack </span>developer <br />
						</p>
					</Fade>
					<Fade delay={3000}>
						<p className="home-paragraph-text-two">
							based out of <span className="highlight">beautiful </span>{' '}
							Colorado
						</p>
					</Fade>
				</div>
				<div className="col home-right-side-background">
					<Rotate top right delay={4000}>
						<h2 className="home-right-text">
							Let's design <br />
							something<span className="highlight">.</span>
						</h2>
					</Rotate>
				</div>
			</div>
		</div>
	);
};

export default Home;
