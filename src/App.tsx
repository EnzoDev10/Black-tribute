import './App.css';
/* import video from './assets/videos/background.webm';
import poster from './assets/images/bg-poster.webp'; */

import { MainContent, Intro } from './components/Index';

function App() {
	/* 	const [showMain, setShowMain] = useState(false);
	 */ return (
		<div className="container">
			{/* background video */}
			{/* <video playsInline autoPlay muted loop id="bgvid" poster={poster}>
				<source src={video} type="video/webm" />
			</video> */}

			<MainContent />
		</div>
	);
}

export default App;
