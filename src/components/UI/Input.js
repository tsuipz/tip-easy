import classes from './Input.module.css';

const Input = () => {
	return (
		<div className={classes.input}>
			<label>Total Price:</label>
			<input type='text' placeholder='Enter Total Price' required />
		</div>
	);
};

export default Input;
