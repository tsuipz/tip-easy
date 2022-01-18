import Card from '../UI/Card';
import classes from './AboutCard.module.css';

const AboutCard = () => {
	return (
		<Card className={classes.section}>
			<h1>Tip Easy</h1>
			<hr />
			<p>Calculate based on spliting the check or&nbsp;per&nbsp;person</p>
		</Card>
	);
};

export default AboutCard;
