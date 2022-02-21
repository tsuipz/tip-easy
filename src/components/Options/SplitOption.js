import React, { useContext } from 'react';

import Input from '../UI/Input';
import { OptionsContext } from '../../context/options-context';

const SplitOption = () => {
	const optionsCtx = useContext(OptionsContext);

	const changeInputHandler = (event) => optionsCtx.changeInput(event.target);

	return (
		<div>
			<Input
				title='Price:'
				type='number'
				name='price'
				value={optionsCtx.splitCheck.price}
				placeholder='Enter Price'
				onPrice={changeInputHandler}
			/>
			<Input
				title='Split:'
				type='number'
				name='split'
				value={optionsCtx.splitCheck.split}
				placeholder='Split Between'
				onPrice={changeInputHandler}
			/>
		</div>
	);
};

export default SplitOption;
