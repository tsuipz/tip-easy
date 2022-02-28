import React, { useContext, useReducer, useRef } from 'react';
import { PriceContext } from '../../context/price-context';
import { OptionsContext } from '../../context/options-context';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './TaxTipCard.module.css';

const currencyReducer = (state, action) => {
	switch (action.type) {
		case 'TAX_CUR_INPUT':
			return { ...state, taxCur: action.value };
		case 'TIP_CUR_INPUT':
			return { ...state, tipCur: action.value };
		case 'TAX_CHOICE_INPUT':
			return { ...state, taxChoice: action.value };
		default:
			return { taxCur: '%', tipCur: '%', taxChoice: 'pre-tax' };
	}
};

const TaxTipCard = () => {
	const [currencyState, dispatchCurrency] = useReducer(currencyReducer, {
		taxCur: '%',
		tipCur: '%',
		taxChoice: 'pre-tax',
	});
	const taxInputRef = useRef();
	const tipInputRef = useRef();

	const priceCtx = useContext(PriceContext);
	const optionsCtx = useContext(OptionsContext);

	const totalHandler = (event) => {
		event.preventDefault();

		priceCtx.inputOptional(
			currencyState.taxCur,
			currencyState.tipCur,
			currencyState.taxChoice,
			taxInputRef.current.value || 0,
			tipInputRef.current.value || 0
		);
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

		priceCtx.showTotal(true);
	};

	const taxCurrencyHandler = (event) =>
		dispatchCurrency({ type: 'TAX_CUR_INPUT', value: event.target.value });

	const tipCurrencyHandler = (event) =>
		dispatchCurrency({ type: 'TIP_CUR_INPUT', value: event.target.value });

	const taxChoiceHandler = (event) =>
		dispatchCurrency({ type: 'TAX_CHOICE_INPUT', value: event.target.value });

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
					<select name='splitOptions' id='taxCurrency' onChange={taxCurrencyHandler}>
						<option value='%'>%</option>
						<option value='$'>$</option>
					</select>
					<label htmlFor='tip'>Tip:</label>
					<input
						id='tip'
						type='number'
						ref={tipInputRef}
						placeholder='Enter Tip'
						min='0'
						step='0.01'
					/>
					<select name='splitOptions' id='tipCurrency' onChange={tipCurrencyHandler}>
						<option value='%'>%</option>
						<option value='$'>$</option>
					</select>
				</div>
				<div className={classes['tax-choices']} onChange={taxChoiceHandler}>
					<input type='radio' value='pre-tax' name='taxChoices' id='taxChoice1' defaultChecked />
					<label htmlFor='taxChoice1'>Tip on Pre-Tax</label>
					<input type='radio' value='post-tax' name='taxChoices' id='taxChoice2' />
					<label htmlFor='taxChoice2'>Tip on Post-Tax</label>
				</div>
				<Button>Submit</Button>
			</form>
		</Card>
	);
};

export default TaxTipCard;
