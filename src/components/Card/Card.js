import classes from "./Card.module.css";

export default function Card({title, body}) {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeading}>
        <h1>
          {title}
        </h1>
      </div>
      <div className={classes.cardBody}>
        <p>
          {body}
        </p>
      </div>
    </div>
  );
}
