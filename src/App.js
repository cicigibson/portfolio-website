import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
	return (
		<div className='app'>
			{/* 
				<AboutMe /> 
					<Logo />
					H1
					H2
					<Icon />
					<Icon />
				*/}
			<div className='about-me'>
				<AboutMe />
			</div>
			<div className='projects'>
				<Projects />
			</div>
		</div>
	);
}

export default App;
