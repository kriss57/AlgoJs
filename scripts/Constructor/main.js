
import { Recipe } from '../Constructor/recipe.js'
import { Engine } from './eengine.js'


//-----------------BROUILLON--------------//
export class Main extends Engine {

    // --conteneur des resultats (init et/ou après recherche)
    result = []
    // --récup ustensils
    ustensils = []                  //-----> USTENSILS
    // --array ingrédients
    ingredients = []                //-----> INGREDIENTS
    // --array appareils
    appliances = []                 //-----> APPAREILS


    /** Start */
    async start() {
        // 1 récupère tous les produits => this.result
        // 2 appel des extrudeurs
        console.log('dans main start()');
        // on recupere array recettes (toutes les recetttes c'est le start)
        this.result = await this.getAll()//-----> RECETTES COMPLETES venant de la class engine
        console.log(this.result);
        // on lance les extrudeurs
        this.exctrudeurs()

    }

    resetExtrudeurs() {
        // --récup ustensils
        this.ustensils = []                  //-----> USTENSILS
        // --array ingrédients
        this.ingredients = []                //-----> INGREDIENTS
        // --array appareils
        this.appliances = []                 //-----> APPAREILS
    }

    /** Search */
    // 1 Ici le moteur de recherche (en 2 version) qui va "réécrire" this.result
    // 2 Appel des extrudeurs
    async search(e) {
        //....... ça veut dir qu'ici on va réécrire le this.result
        this.result = this.engine_search(e) //-------> de la class engin - là où sont les algos
        console.log(this.result);
        //reset extrudeurs
        this.resetExtrudeurs()
        // on lance les extrudeurs
        this.exctrudeurs()
        return true
    }


    /** Extrudeur */
    exctrudeurs() {
        console.log(this.result);
        for (let i = 0; i < this.result.recipes.length; i++) {
            // alimente tab ustensils
            //console.log(this.result.recipes[i]);
            this.ustensils = [...new Set([...this.ustensils, ...this.result.recipes[i].ustensils.map((u) => u.toLowerCase())])].sort()
            //console.log(this.ustensils);
            // alimente tab appareils
            //console.log(this.result.recipes[i].appliance);
            this.appliance = this.result.recipes[i].appliance
            this.appliances = [...new Set([...this.appliances, this.appliance.toLowerCase()])].sort()
            // alimente tab ingrédients
            //console.log(data[i].ingredients);
            // ici peut encore etre optimisé
            let objectIngredients = this.result.recipes[i].ingredients
            for (let ing of objectIngredients) {
                // console.log(ing.ingredient);
                this.ingredients = [...new Set([...this.ingredients, ing.ingredient.toLowerCase()])].sort()

            }
        }

    }

    // Main caller for display tag
    displayAlltags() {
        console.log('dans displayAllTags');
        this.displayUstensilsList()
        this.displayIngredientsList()
        this.displayAppliancesList()
    }

    /** Displayer tag */
    displayUstensilsList() {
        //console.log(this.ustensils);
        const ustensilsContainer = document.getElementById('ustensiles-list')
        for (let i = 0; i < this.ustensils.length; i++) {
            //console.log(ustensils[i]);
            const ustensilTemplate = `<li>${this.ustensils[i]}</li>`
            ustensilsContainer.insertAdjacentHTML('beforeend', ustensilTemplate)
        }

    }

    displayIngredientsList() {
        const ingredientsContainer = document.getElementById('ingredients-list')
        for (let i = 0; i < this.ingredients.length; i++) {
            //console.log(ingredients[i]);
            const ingredientTemplate = `<li class='filter_select'>${this.ingredients[i]}</li>`
            ingredientsContainer.insertAdjacentHTML('beforeend', ingredientTemplate)
        }

    }

    displayAppliancesList() {
        const appliancesContainer = document.getElementById('appareils-list')
        for (let i = 0; i < this.appliances.length; i++) {
            //console.log(appliances[i]);
            const applianceTemplate = `<li class='filter_select'>${this.appliances[i]}</li>`
            appliancesContainer.insertAdjacentHTML('beforeend', applianceTemplate)
        }

    }


    displayRecipeCard() {
        // --- pointer Dom
        const cardContaineur = document.querySelector('.card_container')

        // fabrique tableaux de recettes --- =>data.api=>recipes
        let recipesList = this.result.recipes.map(recipe => new Recipe(recipe))
        //console.log(recipesList);

        // render template 
        let forIndex = ''
        recipesList.forEach(recipes => {
            //console.log(recipes.ingredients);
            let ingredientsArr = recipes.ingredients
            forIndex += recipes.getRecipeCardDOM(ingredientsArr)
        })
        cardContaineur.insertAdjacentHTML('beforeend', forIndex)

    }


}
