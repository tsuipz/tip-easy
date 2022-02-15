import React, { useContext } from 'react';
import { PriceContext } from '../../context/price-context';
import Card from '../UI/Card';

const TotalCard = () => {
	const priceCtx = useContext(PriceContext);

	return (
		<Card>
			{JSON.parse(priceCtx.prices).map((person, index) => {
				return (
					<div key={index}>
						<p>
							{person.name}: {person.price}
						</p>
					</div>
				);
			})}
		</Card>
	);
};

export default TotalCard;
