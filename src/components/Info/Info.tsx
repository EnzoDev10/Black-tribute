import './Info.css';

import gunImg from '../../assets/images/AK47.png';

interface CardProps {
	title: string;
	imgSrc: string;
	text: string;
}

interface SetProps {
	arrayOfTitles: string[];
	arrayOfSrcs: string[];
	arrayOfText: string[];
}

const InfoCard = ({ title, text }: CardProps) => {
	return (
		<div className="infoCard">
			<h3>{title}</h3>
			<div className="card-content">
				<img src={gunImg} alt={`image of ${title}.`} width="460" height="170" />
				<p>{text}</p>
			</div>
		</div>
	);
};

export const SetOfInfoCards = ({
	arrayOfTitles,
	arrayOfSrcs,
	arrayOfText,
}: SetProps) => {
	const listOfCards = arrayOfTitles.map((title, i) => (
		<InfoCard title={title} imgSrc={arrayOfSrcs[i]} text={arrayOfText[i]} />
	));

	return listOfCards;
};
