import { Suspense } from "react";
import MealsGrid from "@/components/meals/meals.grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

// Server components can be async with promises
async function Meals() {
  const meals = await getMeals()

  return <MealsGrid meals={meals}></MealsGrid>
}

export default function MealsPage() {
    return (
      <>
        <header>
          <h1>Meals created by you</h1>
          <Link href="/meals/share"><p>Share a meal</p></Link>
        </header>
        <main>
          {/* by extracting this in another component function */}
          {/* we can wrap it into a Suspense to say this is coming later */}
          {/* It will load fallback data until your component is ready */}
          <Suspense fallback={<p>Please Wait...</p>}>
            <Meals />
          </Suspense>
        </main>
      </>
    );
}