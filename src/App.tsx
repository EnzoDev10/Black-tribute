import { useState, useRef } from 'react';
import './App.css';
/* import video from './assets/videos/background.webm';
import poster from './assets/images/bg-poster.webp'; */

import { MainContent, Intro } from './components/Index';

function App() {
	const overlay = useRef<HTMLDivElement>(null!);
	const [isMainVisible, setIsMainVisible] = useState(false);
	/* Use bracket notation with useRef.  */
	/* Adds an animation to the overlay div so it appears on btn click. */

	function setVisibility() {
		overlay['current']['style']['animation'] = 'fadeOut 5s ease-in forwards';

		const makeVisible = setInterval(() => {
			setIsMainVisible(true);
			clearInterval(makeVisible);
		}, 3000);
	}

	return (
		<div className="container">
			<div className="gun-bg"></div>
			<div className="overlay-black" ref={overlay} />
			{/* background video */}
			{/* <video playsInline autoPlay muted loop id="bgvid" poster={poster}>
				<source src={video} type="video/webm" />
			</video> */}
			{!isMainVisible && <Intro appMethod={setVisibility} />}
			{isMainVisible && <MainContent />}
		</div>
	);
}

export default App;
