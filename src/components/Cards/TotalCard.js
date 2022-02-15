import React, { useContext } from 'react';
import { PriceContext } from '../../context/price-context';
import Card from '../UI/Card';

const TotalCard = () => {
	const priceCtx = useContext(PriceContext);

	// TODO: Continue working on this section to ensure name is show and price with all total
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
