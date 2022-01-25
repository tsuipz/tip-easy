import { createContext, useState } from 'react';

export const PriceContext = createContext({
	prices: [],
	tax: 0,
	tip: 0,
	addPrice: (userPrice) => {},
	inputTax: (userTax) => {},
});

const PriceContextProvider = (props) => {
	const [price, setPrice] = useState([]);
	const [tax, setTax] = useState(0);

	const addPriceHandler = (userPrice) => {
		return setPrice((prevPrice) => prevPrice.concat(userPrice));
	};

	const taxInputHandler = (userTax) => {
		return setTax(userTax);
	};

	const context = {
		prices: price,
		tax: 0,
		tip: 0,
		addPrice: addPriceHandler,
		inputTax: taxInputHandler,
	};

	return (
		<PriceContext className='Provider' value={context}>
			{props.children}
		</PriceContext>
	);
};

export default PriceContextProvider;
