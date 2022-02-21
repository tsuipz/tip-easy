import { createContext, useState } from 'react';

export const PriceContext = createContext({
	perPrices: [],
	splitPrices: {},
	tax: 0,
	tip: 0,
	currency: '%',
	addPrice: (userPrice) => {},
	addSplitPrice: (userPrice) => {},
	inputTax: (currency, userTax) => {},
});

const PriceContextProvider = (props) => {
	const [price, setPrice] = useState([]);
	const [splitPrice, setSplitPrice] = useState({});
	const [tax, setTax] = useState(0);
	const [tip, setTip] = useState(0);
	const [tipCur, setTipCur] = useState('%');

	const addPriceHandler = (userPrice) => {
		return setPrice(userPrice);
	};

	const addSplitPriceHandler = (userPrice) => {
		return setSplitPrice(userPrice);
	};

	const taxInputHandler = (userTax) => setTax(userTax);

	const tipInputHandler = (currency, userTip) => {
		setTipCur(currency);
		setTip(userTip);
	};

	const context = {
		perPrices: price,
		splitPrices: splitPrice,
		tax: tax,
		tip: tip,
		currency: tipCur,
		addPrice: addPriceHandler,
		addSplitPrice: addSplitPriceHandler,
		inputTax: taxInputHandler,
		inputTip: tipInputHandler,
	};

	return (
		<PriceContext.Provider className='Provider' value={context}>
			{props.children}
		</PriceContext.Provider>
	);
};

export default PriceContextProvider;
