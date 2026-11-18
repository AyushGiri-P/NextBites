
import Link from "next/link";
import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="recipe-card-link">
      <div className="recipe-card">
        <img src={recipe.image} alt={recipe.title} />

        <div className="recipe-info">
          <h2>{recipe.title}</h2>
          <p>{recipe.cuisine} Cuisine</p>
          <p>{recipe.minutes} minutes</p>
          <p>Difficulty: {recipe.difficulty}</p>
        </div>
      </div>
    </Link>
  );
}
