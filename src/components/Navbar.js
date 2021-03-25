import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Lantern from '../images/Lantern.jpg';

const Navbar = () => {
	const [isToggled, setToggled] = useState(false);

	const useToggle = () => {
		setToggled(!isToggled);
	};

	return (
		<div className="row">
			<ul className="nav-ul">
				<li>
					<a href="#Home">Home</a>
				</li>
				<li>
					<a href="#AboutMe">About Me</a>
				</li>
				<li>
					<a href="#Projects">Projects</a>
				</li>
				<li>
					<a href="#ContactMe">Contact Me</a>
				</li>
			</ul>
			{!isToggled ? (
				<a className="mobile-nav-icon" onClick={useToggle}>
					<AiOutlineMenu size="45px" />
				</a>
			) : (
				<a className="mobile-nav-icon" onClick={useToggle}>
					<MdClose size="45px" />
				</a>
			)}
		</div>
	);
};

export default Navbar;
