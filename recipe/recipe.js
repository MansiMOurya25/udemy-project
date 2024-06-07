// here we use api key from spooncular website firstly we save api in constant then we fetched the url of spooncular
const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListE1 = document.getElementById("recipe-list");  //thenn we select every element which we want to add in our page and then we kept value

function displayRecipes(recipes) {
    recipeListE1.innerHTML = " ";
    recipes.forEach((recipe) => {
        const recipeItemE1 = document.createElement("li");
        recipeItemE1.classList.add("recipe-item");
        recipeImageE1 = document.createElement("img");   // we will have to keep exact same value which the api gave name 
        recipeImageE1.src = recipe.image;
        recipeImageE1.alt = "recipe image "
        recipeTitleE1 = document.createElement("title");
        recipeTitleE1.innerText = recipe.Title;
        recipeIngredientsE1 = document.createElement("p");
        recipeIngredientsE1.innerHTML= `
        <strong>Ingredient:</strong> ${recipe.extendedIngredients
        .map((ingredient)=>ingredient.original)
        .join(", ")
        } ` ;
        
        recipeLinkE1 = document.createElement("a");
        recipeLinkE1.href = recipe.sourceUrl ;
        recipeLinkE1.innerText ='View Recipe' ;

        recipeItemE1.appendChild(recipeImageE1);   // then we connect to child to  parent so that every child came into their parent element
        recipeItemE1.appendChild(recipeTitleE1);
        recipeItemE1.appendChild(recipeIngredientsE1);
        recipeItemE1.appendChild(recipeLinkE1);
        recipeListE1.appendChild(recipeItemE1);
    })
}

// we fetched value in that function
async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes;
}
  //here we console that value which we will get after fetch and we did callbcak so that which element we create . that api value came into that element 
async function init() {
    const recipes = await getRecipes()
    console.log(recipes);
    displayRecipes(recipes);  // here we connected all tag and api data 
}
    
init() ;

