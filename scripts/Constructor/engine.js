// import { Api } from '../Api/api.js'
// import { Recipe } from '../Constructor/recipe.js'


// //-----------------BROUILLON--------------//
// class Engine {

//     constructor() {
//         this.Api = new Api("data/recipes.json")
//     }

//     /**
//     * Lanceur
//     */

//     async init() {

//         //------------------------------------------------------//
//         //-------------------------LES ARRAYS ------------------//
//         const container = document.querySelector('.card-container')

//         // on recupere array recettes
//         const data = await this.Api.get()
//         //console.log(data.recipes);          //-----> RECETTES COMPLETES
//         const recipes = data.recipes


//         // --récup ustensils
//         let ustensils = []                  //-----> USTENSILS
//         // --array ingrédients
//         let ingredients = []                //-----> INGREDIENTS
//         // --array appareils
//         let appliances = []                 //-----> APPAREILS

//         //-------------------------------------------------------------------------//
//         //----------------------Création, Alimentation des tableaux----------------//

//         // --- methode boucle i
//         const getAllArrays = (data) => {
//             for (let i = 0; i < data.length; i++) {
//                 // alimente tab ustensils
//                 //console.log(data[i].ustensils);
//                 ustensils = [...new Set([...ustensils, ...data[i].ustensils.map((u) => u.toLowerCase())])].sort()
//                 // alimente tab appareils
//                 //console.log(data[i].appliance);
//                 let appliance = data[i].appliance
//                 appliances = [...new Set([...appliances, appliance.toLowerCase()])].sort()
//                 // alimente tab ingrédients
//                 //console.log(data[i].ingredients);
//                 let objectIngrédients = data[i].ingredients
//                 for (let ing of objectIngrédients) {
//                     // console.log(ing.ingredient);
//                     ingredients = [...new Set([...ingredients, ing.ingredient.toLowerCase()])].sort()

//                 }
//             }
//         }

//         var t0 = performance.now();
//         getAllArrays(recipes)
//         var t1 = performance.now();
//         console.log("L'appel de getUstensils a demandé " + (t1 - t0) + " millisecondes.")


//         // console.log(ustensils);
//         // console.log(ingredients);
//         //console.log(appliances);


//         // // --- methode forEach
//         // recipes.forEach((recipe) => {

//         //     ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u)])].sort();

//         // });
//         // console.log(ustensils)

//         //-------------------------------------------------------------------//
//         // ------------------- Affichage des listes -------------------------//

//         const ustensilsContainer = document.getElementById('ustensiles-list')
//         const ingredientsContainer = document.getElementById('ingredients-list')
//         const appliancesContainer = document.getElementById('appareils-list')

//         const displayUstensilsList = () => {

//             for (let i = 0; i < ustensils.length; i++) {
//                 //console.log(ustensils[i]);
//                 const ustensilTemplate = `<li>${ustensils[i]}</li>`
//                 ustensilsContainer.insertAdjacentHTML('beforeend', ustensilTemplate)
//             }

//         }

//         var t0 = performance.now();
//         displayUstensilsList()
//         var t1 = performance.now();
//         console.log("L'appel de displayUstensilsList a demandé " + (t1 - t0) + " millisecondes.")

//         const displayIngredientsList = () => {

//             for (let i = 0; i < ingredients.length; i++) {
//                 //console.log(ingredients[i]);
//                 const ingredientTemplate = `<li class='filter_select'>${ingredients[i]}</li>`
//                 ingredientsContainer.insertAdjacentHTML('beforeend', ingredientTemplate)
//             }

//         }
//         var t0 = performance.now();
//         displayIngredientsList()
//         var t1 = performance.now();
//         console.log("L'appel de displayIngredientsList a demandé " + (t1 - t0) + " millisecondes.")


//         const displayAppliancesList = () => {

//             for (let i = 0; i < appliances.length; i++) {
//                 //console.log(appliances[i]);
//                 const applianceTemplate = `<li class='filter_select'>${appliances[i]}</li>`
//                 appliancesContainer.insertAdjacentHTML('beforeend', applianceTemplate)
//             }

//         }
//         var t0 = performance.now();
//         displayAppliancesList()
//         var t1 = performance.now();
//         console.log("L'appel de displayAppliancesList a demandé " + (t1 - t0) + " millisecondes.")

//         //---------------------------------------------------//
//         //---------------------- Recette -------------------//

//         // --- pointer Dom
//         const cardContaineur = document.querySelector('.card_container')
//         // fabrique tableaux de recettes --- =>data.api=>recipes
//         let recipesList = recipes.map(recipe => new Recipe(recipe))
//         //console.log(recipesList);
//         const displayRecipe = () => {
//             // render template
//             let forIndex = ''
//             recipesList.forEach(recipes => {
//                 //console.log(recipes.ingredients);
//                 let ingredientsArr = recipes.ingredients
//                 forIndex += recipes.getRecipeCardDOM(ingredientsArr)
//             })
//             cardContaineur.insertAdjacentHTML('beforeend', forIndex)
//         }

//         displayRecipe()
//     }



// }

// const app = new Engine()
// app.init()
