import classes from './Input.module.css';

const Input = (props) => {
	return (
		<div className={classes.input}>
			{props.title && <label htmlFor={props.type}>{props.title}</label>}
			<input
				type={props.type}
				name={props.name}
				value={props.value}
				placeholder={props.placeholder || ''}
				onChange={props.onPrice}
			/>
		</div>
	);
};

export default Input;
