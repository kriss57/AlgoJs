// import { Api } from '../Api/api.js'
// import { Recipe } from '../Constructor/recipe.js'


// //-----------------BROUILLON--------------//
// export class Main {

//     // --conteneur des resultats (init et/ou après recherche)
//     result = []
//     // --récup ustensils
//     ustensils = []                  //-----> USTENSILS
//     // --array ingrédients
//     ingredients = []                //-----> INGREDIENTS
//     // --array appareils
//     appliances = []                 //-----> APPAREILS

//     constructor() {
//         this.Api = new Api("data/recipes.json")
//     }


//     /** Start */
//     async start() {
//         // 1 récupère tous les produits => this.result
//         // 2 appel des extrudeurs

//         // on recupere array recettes (toutes les recetttes c'est le start)
//         this.result = await this.Api.get()  //-----> RECETTES COMPLETES
//         this.exctrudeurs()

//     }


//     /** Search */
//     // 1 Ici le moteur de recherche (en 2 version) qui va "réécrire" this.result
//     // 2 Appel des extrudeurs
//     async search(terme) {
//         //....... ça veut dir qu'ici on va réécrire le this.result
//         this.exctrudeurs()
//         return true
//     }


//     /** Extrudeur */
//     exctrudeurs() {

//         for (let i = 0; i < this.result.recipes.length; i++) {
//             // alimente tab ustensils
//             //console.log(data[i].ustensils);
//             this.ustensils = [...new Set([...this.ustensils, ...this.result.recipes[i].ustensils.map((u) => u.toLowerCase())])].sort()
//             // alimente tab appareils
//             //console.log(data[i].appliance);
//             this.appliance = this.result.recipes[i].appliance
//             this.appliances = [...new Set([...this.appliances, this.appliance.toLowerCase()])].sort()
//             // alimente tab ingrédients
//             //console.log(data[i].ingredients);
//             let objectIngredients = data[i].ingredients
//             for (let ing of objectIngredients) {
//                 // console.log(ing.ingredient);
//                 this.ingredients = [...new Set([...this.ingredients, ing.ingredient.toLowerCase()])].sort()

//             }
//         }

//     }

//     // Main caller for display tag
//     displayAlltags() {
//         this.displayUstensilsList()
//         this.displayIngredientsList()
//         this.displayAppliancesList()
//     }

//     /** Displayer tag */
//     displayUstensilsList() {
//         const ustensilsContainer = document.getElementById('ustensiles-list')
//         for (let i = 0; i < this.ustensils.length; i++) {
//             //console.log(ustensils[i]);
//             const ustensilTemplate = `<li>${this.ustensils[i]}</li>`
//             ustensilsContainer.insertAdjacentHTML('beforeend', ustensilTemplate)
//         }

//     }

//     displayIngredientsList() {
//         const ingredientsContainer = document.getElementById('ingredients-list')
//         for (let i = 0; i < this.ingredients.length; i++) {
//             //console.log(ingredients[i]);
//             const ingredientTemplate = `<li class='filter_select'>${this.ingredients[i]}</li>`
//             ingredientsContainer.insertAdjacentHTML('beforeend', ingredientTemplate)
//         }

//     }

//     displayAppliancesList() {
//         const appliancesContainer = document.getElementById('appareils-list')
//         for (let i = 0; i < this.appliances.length; i++) {
//             //console.log(appliances[i]);
//             const applianceTemplate = `<li class='filter_select'>${appliances[i]}</li>`
//             appliancesContainer.insertAdjacentHTML('beforeend', this.applianceTemplate)
//         }

//     }


//     displayRecipeCard() {
//         // --- pointer Dom
//         const cardContaineur = document.querySelector('.card_container')

//         // fabrique tableaux de recettes --- =>data.api=>recipes
//         let recipesList = this.result.recipes.map(recipe => new Recipe(recipe))
//         //console.log(recipesList);

//         // render template
//         let forIndex = ''
//         recipesList.forEach(recipes => {
//             //console.log(recipes.ingredients);
//             let ingredientsArr = recipes.ingredients
//             forIndex += recipes.getRecipeCardDOM(ingredientsArr)
//         })
//         cardContaineur.insertAdjacentHTML('beforeend', forIndex)

//     }
// }
