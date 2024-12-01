import './Button.css';
interface Props {
	label: string;
	parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
	return (
		<div className="btn-container">
			<button onClick={parentMethod}>{label}</button>
			<div className="btn-line"></div>
		</div>
	);
};
