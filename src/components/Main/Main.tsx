import { Button } from '../Index';
import './Main.css';
import logo from '../../assets/images/logo.webp';

export const MainContent = () => {
	return (
		<main className="overlay">
			<div className="left-side side overlay" />
			<div className="lines-container" />

			<div className="main-wrapper">
				<img src={logo} className="logo" alt="Black Logo" />
				<div className="actions-container">
					<Button label="EASY" addSquare={true} />
					<Button label="NORMAL" />
					<Button label="HARD" />
					<Button label="BLACK OPS" addSquare={true} />
				</div>
			</div>
		</main>
	);
};
