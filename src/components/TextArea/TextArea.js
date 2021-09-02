import classes from "./TextArea.module.css";

export default function TextArea({ placeholder, value, change }) {
  return (
    <textarea
      className={classes.textarea}
      placeholder={placeholder}
      value={value}
      onChange={change}
    ></textarea>
  );
}
