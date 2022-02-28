import { createContext, useReducer, useState } from 'react';

const optionalReducer = (_, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			taxCurrency: action.taxCurrency,
			tipCurrency: action.tipCurrency,
			taxChoice: action.userChoice,
			tax: action.userTax,
			tip: action.userTip,
		};
	}
	return { taxCurrency: '%', tipCurrency: '%', taxChoice: 'pre-tax', tax: 0, tip: 0 };
};

export const PriceContext = createContext({
	perPrices: [],
	splitPrices: { price: '', split: 1 },
	tax: 0,
	tip: 0,
	total: false,
	currency: { tax: '', tip: '' },
	taxChoice: '',
	addPrice: (userPrice) => {},
	addSplitPrice: (userPrice) => {},
	inputOptional: (cur, choice, tax, tip) => {},
	calculateTax: (subTotal) => {},
	calculateTip: (subTotal) => {},
	showTotal: (total) => {},
});

const PriceContextProvider = (props) => {
	const [price, setPrice] = useState([]);
	const [splitPrice, setSplitPrice] = useState({});
	const [total, setTotal] = useState(0);
	const [optionalState, dispatchOptional] = useReducer(optionalReducer, {
		taxCurrency: '%',
		tipCurrency: '%',
		taxChoice: 'pre-tax',
		tax: 0,
		tip: 0,
	});

	const addPriceHandler = (userPrice) => {
		return setPrice(userPrice);
	};

	const addSplitPriceHandler = (userPrice) => {
		return setSplitPrice(userPrice);
	};

	const optionalInputHandler = (taxCurrency, tipCurrency, taxChoice, userTax, userTip) => {
		dispatchOptional({
			type: 'USER_INPUT',
			taxCurrency,
			tipCurrency,
			userChoice: taxChoice,
			userTax,
			userTip,
		});
	};

	const calculateTaxHandler = (subTotal) => {
		let totalTax = 0;
		if (optionalState.tax === 0) return 0;

		switch (optionalState.taxCurrency) {
			case '%':
				totalTax = Math.round(subTotal * (optionalState.tax / 100) * 100) / 100;
				break;
			case '$':
				totalTax = Math.round(optionalState.tax * 100) / 100;
				break;
			default:
				break;
		}
		return totalTax;
	};

	const calculateTipHandler = (subTotal, tax) => {
		let userSubTotal = subTotal;
		let totalTip = 0;
		if (optionalState.taxChoice === 'post-tax') userSubTotal += tax;
		switch (optionalState.tipCurrency) {
			case '%':
				totalTip = Math.round(userSubTotal * (optionalState.tip / 100) * 100) / 100;
				break;
			case '$':
				totalTip = Math.round(optionalState.tip * 100) / 100;
				break;
			default:
				break;
		}
		return totalTip;
	};

	const showTotalHandler = (total) => setTotal(total);

	const context = {
		perPrices: price,
		splitPrices: splitPrice,
		tax: optionalState.tax,
		tip: optionalState.tip,
		total: total,
		currency: { tax: optionalState.taxCurrency, tip: optionalState.tipCurrency },
		taxChoice: optionalState.taxChoice,
		addPrice: addPriceHandler,
		addSplitPrice: addSplitPriceHandler,
		inputOptional: optionalInputHandler,
		calculateTax: calculateTaxHandler,
		calculateTip: calculateTipHandler,
		showTotal: showTotalHandler,
	};

	return (
		<PriceContext.Provider className='Provider' value={context}>
			{props.children}
		</PriceContext.Provider>
	);
};

export default PriceContextProvider;
