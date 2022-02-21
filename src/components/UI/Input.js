import classes from './Input.module.css';

const Input = (props) => {
	// TODO: Edit to ensure it accepts mutiple inputs for Split, Per Person, Tax, and Tip
	return (
		<>
			<div className={classes.input}>
				<label htmlFor={props.type}>{props.title}</label>
				<input
					type={props.type}
					name={props.name}
					value={props.value}
					placeholder={props.placeholder || ''}
					onChange={props.onPrice}
				/>
			</div>
		</>
	);
};

export default Input;
