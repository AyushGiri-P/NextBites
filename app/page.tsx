
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Discover Your Next Favorite Meal</h1>
        <p>Explore delicious recipes from around the world.</p>
      </section>

      <section className="recipes-section">
        <h2>Explore Recipes</h2>

        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}
