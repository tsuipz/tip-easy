import React, { createContext, useState } from 'react';

export const OptionsContext = createContext({
	option: 'split',
	inputList: [],
	changeOption: (option) => {},
	changeInput: (testList, list) => {},
	removeInput: (index) => {},
	addInput: () => {},
});

const OptionsContextProvider = (props) => {
	const [option, setOption] = useState('split');
	const [userInputList, setUserInputList] = useState([{ name: '', price: 0 }]);

	const changeOptionHandler = (option) => setOption(option);

	const changeInputHandler = (target, index) => {
		const { name, value } = target;
		const list = [...userInputList];
		list[index][name] = value;
		setUserInputList(list);
	};

	const removeInputHandler = (index) => {
		const list = [...userInputList];
		list.splice(index, 1);
		setUserInputList(list);
	};

	const addInputHandler = () =>
		setUserInputList((prevValue) => [...prevValue, { name: '', price: 0 }]);

	const context = {
		option: option,
		inputList: userInputList,
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
