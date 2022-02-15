import { createContext, useState } from 'react';

export const PriceContext = createContext({
	prices: '',
	tax: 0,
	tip: 0,

	addPrice: (userPrice) => {},
	inputTax: (userTax) => {},
});

const PriceContextProvider = (props) => {
	const [price, setPrice] = useState('');
	const [tax, setTax] = useState(0);

	const addPriceHandler = (userPrice) => setPrice(userPrice);

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
		<PriceContext.Provider className='Provider' value={context}>
			{props.children}
		</PriceContext.Provider>
	);
};

export default PriceContextProvider;
