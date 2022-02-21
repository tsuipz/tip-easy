import React, { useContext, useRef, useState } from 'react';
import { PriceContext } from '../../context/price-context';
import { OptionsContext } from '../../context/options-context';

import Card from '../UI/Card';
import classes from './TaxTipCard.module.css';

const TaxTipCard = () => {
	const [currency, setCurrency] = useState('%');
	const taxInputRef = useRef();
	const tipInputRef = useRef();

	const priceCtx = useContext(PriceContext);
	const optionsCtx = useContext(OptionsContext);

	const totalHandler = (event) => {
		event.preventDefault();
		priceCtx.inputTax(taxInputRef.current.value || 0);
		priceCtx.inputTip(currency, tipInputRef.current.value || 0);
		switch (optionsCtx.option) {
			case 'split':
				priceCtx.addSplitPrice(optionsCtx.splitCheck);
				break;
			case 'per':
				priceCtx.addPrice(optionsCtx.inputList);
				break;
			default:
				break;
		}
	};

	const currencyChangeHandler = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<Card className={classes.section}>
			<form onSubmit={totalHandler}>
				<h2>Tax/Tip (Optionals)</h2>
				<div className={classes.input}>
					<label htmlFor='tax'>Tax:</label>
					<input
						id='tax'
						type='number'
						ref={taxInputRef}
						placeholder='Enter Tax, ex: 8.875'
						min='0'
						step='0.001'
					/>
				</div>
				<div className={classes.input}>
					<label htmlFor='tip'>Tip:</label>
					<input
						id='tip'
						type='number'
						ref={tipInputRef}
						placeholder='Enter Tip'
						min='0'
						step='0.01'
					/>
					<select name='splitOptions' id='splitOptions' onChange={currencyChangeHandler}>
						<option value='%'>%</option>
						<option value='$'>$</option>
					</select>
				</div>
				<button className='button'>Submit</button>
			</form>
		</Card>
	);
};

export default TaxTipCard;
