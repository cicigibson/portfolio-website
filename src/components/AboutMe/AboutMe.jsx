import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './AboutMe.css';

function AboutMe() {
	return (
		<div className='about-me-container'>
			<Logo />
			<div className='about-me-text'>
				<h1 className='name'>
					Cierra <br />
					Newman
				</h1>
				<h2 className='position'>UX Designer + Developer</h2>
				<Button />
			</div>
		</div>
	);
}

export default AboutMe;
