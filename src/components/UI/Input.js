import classes from './Input.module.css';

const Input = (props) => {
	// TODO: Set this to into a separate component

	return (
		<>
			<div className={classes.input}>
				<label>Total Price:</label>
				<input
					type='number'
					placeholder='Enter Total Price'
					name={props.name}
					value={props.value}
					onChange={props.onPrice}
					required
				/>
			</div>
		</>
	);
};

export default Input;
