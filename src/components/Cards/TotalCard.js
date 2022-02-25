import React, { useContext } from 'react';
import { OptionsContext } from '../../context/options-context';
import { PriceContext } from '../../context/price-context';
import Card from '../UI/Card';

const TotalCard = () => {
	const priceCtx = useContext(PriceContext);
	const optionsCtx = useContext(OptionsContext);

	let total = 0;

	const splitSection = () => {
		const splitNum = priceCtx.splitPrices.split;
		const subTotal = Math.round(priceCtx.splitPrices.price * 100) / 100;
		const tax = priceCtx.tax === 0 ? 0 : Math.round(subTotal * (priceCtx.tax / 100) * 100) / 100;
		let tip = 0;
		switch (priceCtx.currency) {
			case '%':
				tip = Math.round(subTotal * (priceCtx.tip / 100) * 100) / 100;
				break;
			case '$':
				tip = Math.round(priceCtx.tip * 100) / 100;
				break;
			default:
				break;
		}
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
					<span>Split over {splitNum}:</span> <span>${splitTotal.toFixed(2)}</span>
				</p>
			</div>
		);
	};

	return (
		<Card>
			{splitSection()}
			{priceCtx.perPrices.map((person, index) => {
				total += +person.price;
				return (
					<div key={index}>
						<p>
							{person.name}: {person.price}
						</p>
					</div>
				);
			})}
			<br />
			<p>
				Total: {total.toFixed(2)}
				<br />
				Tax: ${priceCtx.tax}
				<br />
				Tip: {priceCtx.currency === '$' && '$'}
				{priceCtx.tip}
				{priceCtx.currency === '%' && '%'}
			</p>
		</Card>
	);
};

export default TotalCard;
