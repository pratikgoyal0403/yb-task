import classes from './Input.module.css';

export default function Input({change, value, placeholder}) {
    return <div className={classes.inputContainer}>
        <input className={classes.input} value={value} onChange={change} placeholder={placeholder} />
    </div>
}