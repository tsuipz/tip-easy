import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PriceContextProvider from './context/price-context';

ReactDOM.render(
	<React.StrictMode>
		<PriceContextProvider>
			<App />
		</PriceContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
