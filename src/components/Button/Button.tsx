import './Button.css';

interface Props {
	label: string;
	addSquare?: boolean;
	centered?: boolean;
	parentMethod?: () => void;
}

const corners = (
	<svg viewBox="0 0 100 100" width="25px">
		<path d="M25,2 L2,2 L2,25" fill="none" stroke="white" strokeWidth="10" />
		<path d="M2,75 L2,98 L25,98" fill="none" stroke="white" strokeWidth="10" />
		<path
			d="M75,98 L98,98 L98,75"
			fill="none"
			stroke="white"
			strokeWidth="10"
		/>
		<path d="M98,25 L98,2 L75,2" fill="none" stroke="white" strokeWidth="10" />
	</svg>
);

export const Button = ({
	label,
	addSquare = false,
	centered = false,
	parentMethod = () => {
		console.log(
			`The button with the label: ${label} doesn't have a parent method.`
		);
	},
}: Props) => {
	return (
		<div className={`btn-container  ${centered ? 'center-ver' : ''}`}>
			<div className="btn-line left-line" />
			<button onClick={parentMethod}>
				{addSquare && corners}

				{label}
			</button>
			<div className="btn-line right-line" />
		</div>
	);
};
