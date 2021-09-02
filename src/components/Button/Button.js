import classes from './Button.module.css';

export default function Button({title, click}) {
    return <button className={classes.button} onClick={click}>{title}</button>
}