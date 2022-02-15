import classes from './Input.module.css';

const Input = (props) => {
	// TODO: Set this to into a separate component

	return (
		<>
			<div className={classes.input}>
				<label>{props.title}</label>
				<input
					type={props.type}
					name={props.name}
					value={props.value}
					placeholder={props.placeholder || ''}
					onChange={props.onPrice}
					required
				/>
			</div>
		</>
	);
};

export default Input;
