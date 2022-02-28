import React, { createContext, useState } from 'react';

export const OptionsContext = createContext({
	option: 'split',
	inputList: [],
	splitCheck: {},
	changeOption: (option) => {},
	changeInput: (testList, list) => {},
	removeInput: (index) => {},
	addInput: () => {},
});

const OptionsContextProvider = (props) => {
	const [option, setOption] = useState('split');
	const [userInputList, setUserInputList] = useState([{ name: '', price: '' }]);
	const [splitInput, setSplitInput] = useState({ price: '', split: '' });

	const changeOptionHandler = (option) => setOption(option);

	const changeInputHandler = (target, index = 0) => {
		let { name, value } = target;
		switch (option) {
			case 'split':
				const split = { ...splitInput };
				split[name] = value;
				setSplitInput(split);
				break;
			case 'per':
				const list = [...userInputList];
				list[index][name] = value;
				setUserInputList(list);
				break;
			default:
				break;
		}
	};

	const removeInputHandler = (index) => {
		const list = [...userInputList];
		list.splice(index, 1);
		setUserInputList(list);
	};

	const addInputHandler = () =>
		setUserInputList((prevValue) => [...prevValue, { name: '', price: '' }]);

	const context = {
		option: option,
		inputList: userInputList,
		splitCheck: splitInput,
		changeOption: changeOptionHandler,
		changeInput: changeInputHandler,
		removeInput: removeInputHandler,
		addInput: addInputHandler,
	};

	return (
		<OptionsContext.Provider className='Provider' value={context}>
			{props.children}
		</OptionsContext.Provider>
	);
};

export default OptionsContextProvider;
