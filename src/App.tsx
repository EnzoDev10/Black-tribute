import './App.css';
import video from './assets/videos/background.webm';
import poster from './assets/images/bg-poster.png';
import logo from './assets/images/logo.png';

import { Button } from './components/Index';

function App() {
	return (
		<div className="container">
			{/* background video */}
			<video playsInline autoPlay muted loop id="bgvid" poster={poster}>
				<source src={video} type="video/webm" />
			</video>
			<div className="left-side overlay"></div>
			<div className="lines-container">
				<div className="reverse line" />
				<div className="line" />
			</div>
			<main className="overlay">
				<img src={logo} className="logo" alt="Black Logo" />

				<div className="actions-container">
					<Button label="EASY" addSquare={true} parentMethod={() => {}} />
					<Button label="NORMAL" addSquare={false} parentMethod={() => {}} />
					<Button label="HARD" addSquare={false} parentMethod={() => {}} />
					<Button label="BLACK OPS" addSquare={false} parentMethod={() => {}} />
				</div>
			</main>
		</div>
	);
}

export default App;
