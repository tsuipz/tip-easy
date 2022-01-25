import React, { useState } from 'react';

import Input from '../UI/Input';
import Card from '../UI/Card';
import classes from './SplitCard.module.css';

const SplitCard = () => {
	const [option, setOption] = useState('split');
	const [inputList, setInputList] = useState([{ name: '', price: 0 }]);

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
		setInputList([...inputList, { name: '', price: 0 }]);
	};

	const totalHandler = () => {
		console.log(inputList);
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
			{inputList.map((person, index) => (
				<div key={index}>
					<Input
						name='name'
						value={person.name}
						onPrice={(event) => changeInputHandler(event, index)}
					/>
					<Input
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
			))}
			<button className='button' onClick={addInputHandler}>
				Add Input
			</button>
			<button className='button' onClick={totalHandler}>
				Submit
			</button>
			<div>{JSON.stringify(inputList)}</div>
		</Card>
	);
};

export default SplitCard;
