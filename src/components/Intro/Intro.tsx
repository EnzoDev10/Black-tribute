import { Button } from '../Index';
import './Intro.css';
import logo from '../../assets/images/logo.webp';

import { useRef } from 'react';

export const Intro = () => {
	const overlay = useRef<HTMLDivElement>(null!);

	const fadeAnimation = () => {
		/* Use bracket notation with useRef.  */
		/* Adds an animation to the overlay div so it appears on btn click. */
		overlay['current']['style']['animation'] = 'fadeOut 3s ease-in forwards';
	};

	return (
		<>
			<div className="intro-container">
				<div className="overlay-black" ref={overlay} />
				<div className="left-side side overlay" />
				<div className="lines-container">
					<div className="logo-container">
						<img src={logo} className="intro-logo" alt="Black game logo" />
						<h1>Honor Page</h1>
					</div>
					<Button
						parentMethod={fadeAnimation}
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
