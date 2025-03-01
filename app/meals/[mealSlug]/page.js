import { getMeal } from '@/lib/meals';
import classes from './page.module.css'

export default function MealDetailsPage({params}) {

  const meal = getMeal(params.mealSlug)

    return (
      <div>
        <header className={classes.header}>
          <div className={classes.image}></div>
          <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
              by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className={classes.summary}>{meal.summary}</p>
          </div>
        </header>
        <main>
          <p className={classes.instructions} dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}></p>
        </main>
      </div>
    );
}