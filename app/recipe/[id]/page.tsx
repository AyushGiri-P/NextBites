
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

export const instant = false;

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = getRecipe(Number(id));

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <h1>{recipe.title}</h1>

      <p>
        {recipe.cuisine} · {recipe.minutes} minutes · {recipe.difficulty}
      </p>

      <img src={recipe.image} alt={recipe.title} />

      <section>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Instructions</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
