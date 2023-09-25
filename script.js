"use strict";

const API_KEY = "266f27c100a141c19b5635f1e54dc313";

const recipeListEL = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  recipeListEL.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEL = document.createElement("li");
    recipeItemEL.classList.add("recipe-item");

    // image
    const recipeImageEL = document.createElement("img");
    recipeImageEL.src = recipe.image;
    recipeImageEL.alt = "recipe img";

    // title
    const recipeTitleEL = document.createElement("h2");
    recipeTitleEL.innerText = recipe.title;

    // Ingredients
    const recipeIngredientsEL = document.createElement("p");
    recipeIngredientsEL.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}
    `;

    // link
    const recipeLinkEL = document.createElement("a");
    recipeLinkEL.href = recipe.sourceUrl;
    recipeLinkEL.innerText = "View Recipe";

    recipeItemEL.appendChild(recipeImageEL);
    recipeItemEL.appendChild(recipeTitleEL);
    recipeItemEL.appendChild(recipeIngredientsEL);
    recipeItemEL.appendChild(recipeLinkEL);
    recipeListEL.appendChild(recipeItemEL);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();
