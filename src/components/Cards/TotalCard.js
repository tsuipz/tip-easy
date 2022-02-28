import React, { useContext } from 'react';
import { OptionsContext } from '../../context/options-context';
import { PriceContext } from '../../context/price-context';
import Card from '../UI/Card';

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

		// TODO: CSS Style
		return (
			<div>
				<p>
					<span>Sub Total:</span> <span>${subTotal.toFixed(2)}</span>
				</p>
				<p>
					<span>Tax:</span> <span>${tax}</span>
				</p>
				<p>
					<span>Tip:</span> <span>${tip}</span>
				</p>
				<p>
					<span>Total:</span> <span>${total.toFixed(2)}</span>
				</p>
				<p>
					<span>Split over {splitNum} People:</span> <span>${splitTotal.toFixed(2)}</span>
				</p>
			</div>
		);
	};

	const perPersonTotal = () => {
		let subTotal = priceCtx.perPrices.reduce((prevVal, curVal) => (prevVal += +curVal.price), 0);

		const tax = priceCtx.calculateTax(subTotal);
		const tip = priceCtx.calculateTip(subTotal, tax);

		const total = subTotal + tax + tip;

		// TODO: Add CSS Styles
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
							: priceCtx.calculateTip(personPrice);

					const personTotal = personPrice + personTax + personTip;

					return (
						<p key={index}>
							<span>{person.name || `Person ${index + 1}`}:</span>{' '}
							<span>${(+personTotal).toFixed(2)}</span>
						</p>
					);
				})}
				<p>
					<span>Total:</span> <span>${total.toFixed(2)}</span>
				</p>
			</div>
		);
	};

	return (
		<Card>
			{optionsCtx.option === 'split' && splitTotal()}
			{optionsCtx.option === 'per' && perPersonTotal()}
		</Card>
	);
};

export default TotalCard;
