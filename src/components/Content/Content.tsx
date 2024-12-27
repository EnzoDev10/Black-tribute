import { Button, SoundControl } from '../Index';
import './Content.css';
import logo from '../../assets/images/logo.webp';

export const MainContent = () => {
	return (
		<main>
			<div className='pusher'>
				<div className="left-side side overlay"></div>
				<div className="lines-container"></div>
			</div>

			<div className="container overlay">
				<img src={logo} className="logo" alt="Black Logo" />
				<div className="actions-container">
					<Button label="EASY" addSquare={true} />
					<Button label="NORMAL" />
					<Button label="HARD" />
					<Button label="BLACK OPS" addSquare={true} />
				</div>
				<SoundControl />
			</div>
		</main>
	);
};
