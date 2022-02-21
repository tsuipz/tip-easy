import React, { useContext } from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './PerPersonOption.module.css';
import { OptionsContext } from '../../context/options-context';

const PerPersonOption = (props) => {
	const optionsCtx = useContext(OptionsContext);

	const changeInputHandler = (event, index) => optionsCtx.changeInput(event.target, index);

	const addInputHandler = () => optionsCtx.addInput();

	const removeInputHandler = (index) => optionsCtx.removeInput(index);

	return (
		<>
			{optionsCtx.inputList.map((person, index) => (
				<div key={index} className={classes.perSection}>
					<Input
						title={`${index + 1}:`}
						type='text'
						name='name'
						value={person.name}
						placeholder="Enter Person's Name"
						onPrice={(event) => changeInputHandler(event, index)}
					/>
					<Input
						title='Price'
						type='number'
						name='price'
						value={person.price}
						onPrice={(event) => changeInputHandler(event, index)}
					/>
					{optionsCtx.inputList.length !== 1 && (
						<Button onClick={() => removeInputHandler(index)}>-</Button>
					)}
				</div>
			))}
			<button className='button' onClick={addInputHandler}>
				Add Input
			</button>
		</>
	);
};

export default PerPersonOption;
