import React, { useContext } from 'react';
import AboutCard from './components/Cards/AboutCard';
import OptionsCard from './components/Cards/OptionsCard';
import TotalCard from './components/Cards/TotalCard';
import { PriceContext } from './context/price-context';

import './App.css';
import TaxTipCard from './components/Cards/TaxTipCard';

function App() {
	const priceCtx = useContext(PriceContext);
	return (
		<main className='center app'>
			<AboutCard />
			<OptionsCard />
			<TaxTipCard />
			{(priceCtx.perPrices.length !== 0 || Object.keys(priceCtx.splitPrices).length !== 0) && (
				<TotalCard />
			)}
		</main>
	);
}

export default App;
