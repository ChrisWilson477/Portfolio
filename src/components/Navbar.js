import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Lantern from '../images/Lantern.jpg';

const Navbar = () => {


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
		</div>
	);
};

export default Navbar;
