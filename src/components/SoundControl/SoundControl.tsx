import { useState } from 'react';
import soundIconOff from '../../assets/images/sound-Icon.webp';
import soundIconOn from '../../assets/images/speaker-svgrepo-com.png';

import './SoundControl.css';

export const SoundControl = () => {
	const [soundOn, setsoundOn] = useState(false);

	function changeIcon() {
		setsoundOn(!soundOn);
	}
	return (
		<div className="sound-control">
			<button onClick={changeIcon}>
				<strong>SOUND</strong>
				<img
					className="sound-icon"
					/* Changes icon if the sound is on or off. */
					src={soundOn ? soundIconOn : soundIconOff}
					alt="Activar sonido"
				/>
			</button>
		</div>
	);
};
