import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
	const projects = [
		{
			name: 'Landing Page',
			languages: ['HTML', 'CSS', 'React JS'],
			source: 'testImage.png',
		},
		{
			name: 'Magic 8 Ball',
			languages: ['HTML', 'CSS', 'React JS'],
			source: 'testImage.png',
		},
		{
			name: 'Magic 8 Ball',
			languages: ['HTML', 'CSS', 'React JS'],
			source: 'testImage.png',
		},
	];

	return (
		<div className='project-container'>
			{projects.map((project) => (
				<ProjectCard
					name={project.name}
					languages={project.languages}
					source={project.source}
				/>
			))}
		</div>
	);
}

export default Projects;
