"use strict";

const API_KEY = "266f27c100a141c19b5635f1e54dc313";

const recipeListEL = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  recipeListEL.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEL = document.createElement("li");
    recipeItemEL.classList.add("recipe-item");
    const recipeImageEL = document.createElement("img");
    recipeImageEL.src = recipe.image;
    recipeImageEL.alt = "recipe img";

    recipeItemEL.appendChild(recipeImageEL);
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
