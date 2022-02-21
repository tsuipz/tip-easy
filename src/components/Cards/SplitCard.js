import React, { useContext, useState } from 'react';
import { PriceContext } from '../../context/price-context';
import PerPersonOption from '../Options/PerPersonOption';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Card from '../UI/Card';
import classes from './SplitCard.module.css';
import { OptionsContext } from '../../context/options-context';

const SplitCard = () => {
	const [inputList, setInputList] = useState([{ name: '', price: 0 }]);
	const priceCtx = useContext(PriceContext);
	const optionsCtx = useContext(OptionsContext);

	const optionChangeHandler = (event) => optionsCtx.changeOption(event.target.value);

	const totalHandler = () => priceCtx.addPrice(JSON.stringify(optionsCtx.inputList));

	// TODO: CLEAN THIS UP
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
			{/* {option === 'split' ? <Input price={priceInputRef} /> : null} */}
			{optionsCtx.option === 'per' ? (
				<PerPersonOption inputList={inputList} setInputList={setInputList} />
			) : null}
			<button className='button' onClick={totalHandler}>
				Submit
			</button>
		</Card>
	);
};

export default SplitCard;
