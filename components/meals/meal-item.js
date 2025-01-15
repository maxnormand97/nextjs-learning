import Link from 'next/link';

import classes from './meal-item.module.css';

export default function MealItem({ title, slug, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}