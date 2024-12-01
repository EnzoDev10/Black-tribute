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

				<div className="btns-container">
					<Button
						label="EASY"
						parentMethod={() => {
							console.log('hola');
						}}
					/>
					<Button
						label="NORMAL"
						parentMethod={() => {
							console.log('hola');
						}}
					/>
					<Button
						label="HARD"
						parentMethod={() => {
							console.log('hola');
						}}
					/>
					<Button
						label="BLACK OPS"
						parentMethod={() => {
							console.log('hola');
						}}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
