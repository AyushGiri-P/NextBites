
"use client";

import { useState } from "react";
import { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({
  recipes,
}: {
  recipes: Recipe[];
}) {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes or cuisines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="no-results">
          No recipes match your search. Try something else!
        </p>
      )}
    </div>
  );
}
