import React, { useContext } from 'react';
import AboutCard from './components/Cards/AboutCard';
import OptionsCard from './components/Cards/OptionsCard';
import TotalCard from './components/Cards/TotalCard';
import { PriceContext } from './context/price-context';

import './App.css';
import TaxTipCard from './components/Cards/TaxTipCard';

function App() {
	const priceCtx = useContext(PriceContext);

	const totalCard = () => {
		if (priceCtx.total !== 0) {
			return <TotalCard />;
		}
	};

	return (
		<main className='center app'>
			<AboutCard />
			<OptionsCard />
			<TaxTipCard />
			{totalCard()}
		</main>
	);
}

export default App;
