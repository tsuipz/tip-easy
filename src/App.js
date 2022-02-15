import React, { useContext } from 'react';
import AboutCard from './components/Cards/AboutCard';
import SplitCard from './components/Cards/SplitCard';
import TotalCard from './components/Cards/TotalCard';
import { PriceContext } from './context/price-context';

import './App.css';

function App() {
	const priceCtx = useContext(PriceContext);
	return (
		<main className='center app'>
			<AboutCard />
			<SplitCard />
			{priceCtx.prices.length !== 0 && <TotalCard />}
		</main>
	);
}

export default App;
