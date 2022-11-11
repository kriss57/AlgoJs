
import { Recipe } from '../Constructor/recipe.js'
import { Engine } from './eengine.js'


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
        this.ustensils = []
        this.ingredients = []
        this.appliances = []
    }

    /** Search */
    // 1 Ici le moteur de recherche (en 2 version) qui va "réécrire" this.result
    // 2 Appel des extrudeurs
    async search(e) {
        //....... ça veut dir qu'ici on va réécrire le this.result
        this.result = this.engine_search(e) //-------> de la class engin - là où sont les algos
        // reset extrudeurs
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
            this.ustensils = [...new Set([...this.ustensils, ...this.result.recipes[i].ustensils.map((u) => u.toLowerCase())])].sort()
            // alimente tab appareils
            this.appliance = this.result.recipes[i].appliance
            this.appliances = [...new Set([...this.appliances, this.appliance.toLowerCase()])].sort()
            // alimente tab ingrédients
            let objectIngredients = this.result.recipes[i].ingredients
            for (let ing of objectIngredients) {
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

    //  Reset start after delete user input if < 3
    async resetStart() {
        await this.start()
        this.resetDisplayer()
        this.displayAlltags()
        this.displayRecipeCard()
    }

    /** Displayer tag */
    displayUstensilsList() {
        const ustensilsContainer = document.getElementById('ustensiles-list')
        for (let i = 0; i < this.ustensils.length; i++) {
            const ustensilTemplate = `<li>${this.ustensils[i]}</li>`
            ustensilsContainer.insertAdjacentHTML('beforeend', ustensilTemplate)
        }

    }

    displayIngredientsList() {
        const ingredientsContainer = document.getElementById('ingredients-list')
        for (let i = 0; i < this.ingredients.length; i++) {
            const ingredientTemplate = `<li class='filter_select'>${this.ingredients[i]}</li>`
            ingredientsContainer.insertAdjacentHTML('beforeend', ingredientTemplate)
        }

    }

    displayAppliancesList() {
        const appliancesContainer = document.getElementById('appareils-list')
        for (let i = 0; i < this.appliances.length; i++) {
            const applianceTemplate = `<li class='filter_select'>${this.appliances[i]}</li>`
            appliancesContainer.insertAdjacentHTML('beforeend', applianceTemplate)
        }

    }


    displayRecipeCard() {
        console.log('dans displayCard');
        // --- pointer Dom
        const cardContaineur = document.querySelector('.card_container')

        // fabrique tableaux de recettes --- =>data.api=>recipes
        let recipesList = this.result.recipes.map(recipe => new Recipe(recipe))

        // render template  
        let forIndex = ''
        let message = `<strong>Aucune recette ne correspond à votre critère... vous pouvez chercher << tarte au pommes >>, << poisson >>, etc. </strong>`

        recipesList.forEach(recipes => {
            let ingredientsArr = recipes.ingredients
            forIndex += recipes.getRecipeCardDOM(ingredientsArr)
        })
        if (recipesList.length !== 0) {
            cardContaineur.insertAdjacentHTML('beforeend', forIndex)
        } else {
            cardContaineur.insertAdjacentHTML('beforeend', message)
        }

    }

}
