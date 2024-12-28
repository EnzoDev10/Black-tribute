import goBackSrc from '../../assets/images/atras.svg';

interface Prop {
	parentMethod: () => void;
}

export const GoBack = ({ parentMethod }: Prop) => {
	return (
		<div className="go-back">
			<button id="go-back-btn" onClick={parentMethod}>
				<img src={goBackSrc} alt="" />
				<strong>ATRAS</strong>
			</button>
		</div>
	);
};
