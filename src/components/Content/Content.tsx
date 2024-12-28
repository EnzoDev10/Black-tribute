import { Button, SoundControl, GoBack } from '../Index';
import './Content.css';
import logo from '../../assets/images/logo.webp';

import { useEffect, useRef, useState } from 'react';
export const MainContent = () => {
	const [nameBtnsToShow, setNameBtnsToShow] = useState('main');
	const main = useRef<HTMLDivElement>(null!);
	let lastName: string;

	function changeCurrentBtns(nameOfBtnsContainer: string) {
		if (nameOfBtnsContainer != '') {
			// Moves the elements outside of the screen to change them for others
			main['current']['style']['animation'] = 'ContentAnimReverse 3s forwards';
			const bringBackContent = setInterval(() => {
				// And brings the new ones after 3 seconds.
				main['current']['style']['animation'] = 'ContentAnim 3s forwards';
				setNameBtnsToShow(nameOfBtnsContainer);
				clearInterval(bringBackContent);
			}, 3000);
		}
	}

	/* Changes the .go-back button function argument.  */
	switch (nameBtnsToShow) {
		case 'guns':
		case 'misions':
		case 'eggs':
			lastName = 'main';
			break;

		default:
			lastName = '';
			break;
	}

	/* this ensures that the fade in animation only happens on the first render. */
	// first, saves a truthy value inside a useRef variable to represent that the first render happened.
	const firstRender = useRef(true);

	/* 
	after that the value is changed to false with useEffect so it prevails despise re-renders.
	*/
	useEffect(() => {
		firstRender.current = false;
	}, []);

	return (
		<main ref={main}>
			<div className="pusher">
				<div className="left-side side overlay"></div>
				<div className="lines-container"></div>
			</div>
			<div
				className={`container overlay${firstRender.current ? ' fadeIn' : ''}`}
			>
				<img src={logo} className="logo" alt="Black Logo" />
				<div className="actions-container">
					{nameBtnsToShow === 'main' && (
						<div id="First">
							<Button
								label="GUNS"
								addSquare={true}
								parentMethod={() => changeCurrentBtns('guns')}
							/>
							<Button
								label="MISIONS"
								addSquare={true}
								parentMethod={() => changeCurrentBtns('misions')}
							/>
							<Button
								label="EASTER EGGS"
								addSquare={true}
								parentMethod={() => changeCurrentBtns('eggs')}
							/>
						</div>
					)}

					{nameBtnsToShow === 'guns' && (
						<div id="GUNS">
							<Button label="HANDGUN" addSquare={true} />
							<Button label="SUBMACHINE" addSquare={true} />
							<Button label="SHOTGUNS" addSquare={true} />
							<Button label="RIFLES" addSquare={true} />
						</div>
					)}
					{nameBtnsToShow === 'misions' && (
						<div id="MISIONS">
							<Button label="PRINCIPALES" addSquare={true} />
							<Button label="SECUNDARIAS" addSquare={true} />
						</div>
					)}

					{nameBtnsToShow === 'eggs' && (
						<div id="EASTER EGGS">
							<Button label="NO SE" addSquare={true} />
							<Button
								label="QUE PINGAS"
								addSquare={true}
								parentMethod={() => {}}
							/>
							<Button label="PONER" addSquare={true} />
							<Button label="ACA" addSquare={true} />
						</div>
					)}
				</div>
				<SoundControl />
				<GoBack parentMethod={() => changeCurrentBtns(lastName)} />
			</div>
		</main>
	);
};
