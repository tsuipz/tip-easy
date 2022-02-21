import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OptionsContextProvider from './context/options-context';
import PriceContextProvider from './context/price-context';

ReactDOM.render(
	<React.StrictMode>
		<OptionsContextProvider>
			<PriceContextProvider>
				<App />
			</PriceContextProvider>
		</OptionsContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
