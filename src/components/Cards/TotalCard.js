import React, { useContext } from 'react';
import { OptionsContext } from '../../context/options-context';
import { PriceContext } from '../../context/price-context';

import Card from '../UI/Card';
import classes from './TotalCard.module.css';

const TotalCard = () => {
	const priceCtx = useContext(PriceContext);
	const optionsCtx = useContext(OptionsContext);

	const splitTotal = () => {
		const splitNum = priceCtx.splitPrices.split || 1;
		const subTotal = Math.round(priceCtx.splitPrices.price * 100) / 100;
		const tax = priceCtx.calculateTax(subTotal);
		const tip = priceCtx.calculateTip(subTotal, tax);

		const total = subTotal + tax + tip;
		const splitTotal = total / splitNum;

		return (
			<div>
				<p className={classes.receipt}>
					<span>Sub Total:</span> <span>${subTotal.toFixed(2)}</span>
					<span>Tax:</span> <span>${tax.toFixed(2)}</span>
					<span>Tip:</span> <span>${tip.toFixed(2)}</span>
					<span className={classes.total}>Total:</span>
					<span className={classes.total}>${total.toFixed(2)}</span>
					<span className={classes.total}>Split over {splitNum} People:</span>
					<span className={classes.total}>${splitTotal.toFixed(2)}</span>
				</p>
			</div>
		);
	};

	const perPersonTotal = () => {
		let subTotal = priceCtx.perPrices.reduce((prevVal, curVal) => (prevVal += +curVal.price), 0);

		const tax = priceCtx.calculateTax(subTotal);
		const tip = priceCtx.calculateTip(subTotal, tax);
		const total = subTotal + tax + tip;

		return (
			<div>
				{priceCtx.perPrices.map((person, index) => {
					const personPrice = +person.price;
					const personTax =
						priceCtx.currency.tax === '$'
							? (personPrice / subTotal) * priceCtx.tax
							: priceCtx.calculateTax(personPrice);
					const personTip =
						priceCtx.currency.tip === '$'
							? (personPrice / subTotal) * priceCtx.tip
							: priceCtx.calculateTip(personPrice, personTax);

					const personName = person.name || `Person ${index + 1}`;
					const personTotal = personPrice + personTax + personTip;

					return (
						<p className={classes['per-person']} key={index}>
							<span>{personName}:</span> <span>${(+personTotal).toFixed(2)}</span>
						</p>
					);
				})}
				<p className={`${classes['per-person']} ${classes.total}`}>
					<span>Total:</span> <span>${total.toFixed(2)}</span>
				</p>
			</div>
		);
	};

	return (
		<Card className={classes.section}>
			{optionsCtx.option === 'split' && splitTotal()}
			{optionsCtx.option === 'per' && perPersonTotal()}
		</Card>
	);
};

export default TotalCard;
