import classes from './Input.module.css';

const Input = () => {
	return (
		<div className={classes.input}>
			<label>
				Total Price: <input type='text' placeholder='Enter Total Price' required />
			</label>
		</div>
	);
};

export default Input;
