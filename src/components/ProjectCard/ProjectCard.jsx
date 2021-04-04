import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
	return (
		<div className='project-card-container'>
			<div className='project-photo'>
				<img
					src={process.env.PUBLIC_URL + `/images/${props.source}`}
					alt={'test'}
				/>
			</div>
			<div className='photo-card-text'>
				<h1>{props.name}</h1>
				<h2>{props.languages}</h2>
			</div>
		</div>
	);
}

export default ProjectCard;
