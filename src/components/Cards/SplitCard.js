import React, { useContext, useState } from 'react';

import Input from '../UI/Input';
import Card from '../UI/Card';
import classes from './SplitCard.module.css';
import { PriceContext } from '../../context/price-context';

const DEFAULT_PERSON = {
	name: '',
	price: 0,
};

const SplitCard = () => {
	const [option, setOption] = useState('split');
	const [inputList, setInputList] = useState([DEFAULT_PERSON]);
	const priceCtx = useContext(PriceContext);

	const optionChangeHandler = (event) => {
		setOption(event.target.value);
	};

	const changeInputHandler = (event, index) => {
		const { name, value } = event.target;
		const list = [...inputList];
		list[index][name] = value;
		setInputList(list);
	};

	const removeInputHandler = (index) => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
	};

	const addInputHandler = () => {
		setInputList([...inputList, DEFAULT_PERSON]);
	};

	const totalHandler = () => {
		priceCtx.addPrice(JSON.stringify(inputList));
	};

	// TODO: CLEAN THIS UP
	return (
		<Card className={classes.section}>
			<label htmlFor='splitOptions'>
				Select either Split or&nbsp;Per&nbsp;Person
				<div className={classes['select-dropdown']}>
					<select name='splitOptions' id='splitOptions' onChange={optionChangeHandler}>
						<option value='split'>Split</option>
						<option value='per'>Per Person</option>
					</select>
				</div>
			</label>
			{/* {option === 'split' ? <Input price={priceInputRef} /> : null} */}
			{option === 'per'
				? inputList.map((person, index) => (
						<div key={index} className={classes.perSection}>
							<Input
								title={`Person ${index + 1}`}
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
							{inputList.length !== 1 && (
								<button className='button' onClick={() => removeInputHandler(index)}>
									-
								</button>
							)}
						</div>
				  ))
				: null}
			<button className='button' onClick={addInputHandler}>
				Add Input
			</button>
			<button className='button' onClick={totalHandler}>
				Submit
			</button>
		</Card>
	);
};

export default SplitCard;
