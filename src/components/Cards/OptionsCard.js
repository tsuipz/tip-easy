import React, { useContext } from 'react';
import { OptionsContext } from '../../context/options-context';
import PerPersonOption from '../Options/PerPersonOption';
import SplitOption from '../Options/SplitOption';

import Card from '../UI/Card';
import classes from './OptionsCard.module.css';

const SplitCard = () => {
	const optionsCtx = useContext(OptionsContext);

	const optionChangeHandler = (event) => optionsCtx.changeOption(event.target.value);

	return (
		<Card className={classes.section}>
			<label htmlFor='splitOptions'>
				<h2>Select either Split or&nbsp;Per&nbsp;Person</h2>
			</label>
			<div className={classes['select-dropdown']}>
				<select name='splitOptions' id='splitOptions' onChange={optionChangeHandler}>
					<option value='split'>Split</option>
					<option value='per'>Per Person</option>
				</select>
			</div>
			{optionsCtx.option === 'split' ? <SplitOption /> : null}
			{optionsCtx.option === 'per' ? <PerPersonOption /> : null}
		</Card>
	);
};

export default SplitCard;
