import MealsGrid from "@/components/meals/meals.grid";
import Link from "next/link";

export default function MealsPage() {
    return (
      <>
        <header>
          <h1>Meals created by you</h1>
          <Link href="/meals/share"><p>Share a meal</p></Link>
        </header>
        <main>
          <MealsGrid meals={[]}></MealsGrid>
        </main>
      </>
    );
}