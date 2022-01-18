import React, { useState } from 'react';

import Input from '../UI/Input';
import Card from '../UI/Card';
import classes from './SplitCard.module.css';

const SplitCard = () => {
	const [option, setOption] = useState('split');

	const optionChangeHandler = (event) => {
		setOption(event.target.value);
	};

	return (
		<Card className={classes.section}>
			<label htmlFor='splitOptions'>
				Select either Split or&nbsp;Per&nbsp;Person
				<div className={classes['select-dropdown']}>
					<select name='splitOptions' id='splitOptions' onChange={optionChangeHandler}>
						<option value='split'>Split</option>
						<option value='per'>Per Person</option>
					</select>
				</div>
			</label>
			{option === 'split' ? <Input /> : null}
		</Card>
	);
};

export default SplitCard;
