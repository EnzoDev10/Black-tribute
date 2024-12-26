import { Button } from '../Index';
import './Intro.css';
import logo from '../../assets/images/logo.webp';

interface Props {
	appMethod: () => void;
}
export const Intro = ({ appMethod }: Props) => {
	return (
		<>
			<div className="intro-container">
				<div className="left-side side overlay" />
				<div className="lines-container">
					<div className="logo-container">
						<img src={logo} className="intro-logo" alt="Black game logo" />
						<h1>Honor Page</h1>
					</div>
					<Button
						parentMethod={appMethod}
						centered={true}
						label="PULSA EL BOTON START"
					/>
					<p>2006 ELECTRONICS ARTS INC. ALL RIGHTS RESERVED</p>
				</div>
				<div className="right-side side overlay" />
			</div>
		</>
	);
};
