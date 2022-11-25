
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
        console.log('resetExtrudeur vide les 3 tab');
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

    async searchTag(e) {
        console.log('dans searchTag');
        let listName = (e.target.parentNode.nextSibling.nextSibling.childNodes[1]);
        console.log(listName);
        //....... ça veut dir qu'ici on va réécrire le this.ingredients
        if (listName.id == 'ingredients-list') {
            this.ingredients = this.engine_search_tag(e)
        }
        if (listName.id == 'appareils-list') {
            this.appliances = this.engine_search_tag(e)
        }
        if (listName.id == 'ustensiles-list') {
            this.ustensils = this.engine_search_tag(e)
        }
        console.log(this.ingredients); // ici tableau reactif

        // reset extrudeurs
        //this.resetExtrudeurs()
        this.resetListTag(listName)
        // // afficher nouvelle liste
        this.displaysListSelected(listName)
        // on lance les extrudeurs
        this.exctrudeurs()
        //return true
        console.log(this.ingredients); // ici tableau complet apres extrudeur

    }

    /**
     * efface le contenu de la liste sélectionnée
     * @param {HTML élément} listName 
     */
    resetListTag(listName) {
        console.log('dans reset affichage liste tag');
        listName.innerHTML = ""
    }
    /**
     * Affiche le contenu de la liste sélectionnée
     * @param {HTML élément} listName 
     */
    displaysListSelected(listName) {
        console.log('dans affichage liste tag');
        if (listName.id == 'ingredients-list') {
            this.displayIngredientsList()
        }
        if (listName.id == 'appareils-list') {
            this.displayAppliancesList()
        }
        if (listName.id == 'ustensiles-list') {
            this.displayUstensilsList()
        }
    }

    /** Extrudeur */
    exctrudeurs() {
        console.log('dans début exrtrudeur');
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
        console.log('dans fin extrudeur retourne les 3 tableau trier api');
    }

    // Main caller for display tag
    displayAlltags() {
        console.log('dans affichage des 3 liste de tag');
        this.displayUstensilsList()
        this.displayIngredientsList()
        this.displayAppliancesList()
    }

    //  Reset start after delete user input if < 3
    async resetStart() {
        console.log('dans resetStart');
        await this.start()
        this.resetDisplayer()
        this.displayAlltags()
        this.displayRecipeCard()
    }

    resetStartTag(e) {
        console.log('dans reset startTag'); ('')
        let listName = (e.target.parentNode.nextSibling.nextSibling.childNodes[1]);
        // reset la liste
        this.resetListTag(listName)
        // afficher nouvelle liste
        this.displaysListSelected(listName)
    }

    /** Displayer tag */
    displayUstensilsList() {
        console.log('dans affichage liste ustensils api');
        const ustensilsContainer = document.getElementById('ustensiles-list')
        for (let i = 0; i < this.ustensils.length; i++) {
            const ustensilTemplate = `<li>${this.ustensils[i]}</li>`
            ustensilsContainer.insertAdjacentHTML('beforeend', ustensilTemplate)
        }

    }

    displayIngredientsList() {
        console.log('dans affichage liste ingredient api');
        const ingredientsContainer = document.getElementById('ingredients-list')
        for (let i = 0; i < this.ingredients.length; i++) {
            const ingredientTemplate = `<li class='filter_select'>${this.ingredients[i]}</li>`
            ingredientsContainer.insertAdjacentHTML('beforeend', ingredientTemplate)
        }

    }

    displayAppliancesList() {
        console.log('dans affichage liste appliances api');
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

    searchKeyword(e) {

        this.result = this.search_by_keyword(e)
        // reset extrudeurs
        this.resetExtrudeurs()
        // on lance les extrudeurs
        this.exctrudeurs()
        return true
    }

    /**
     * 
     * @param {Event} e 
     * @returns true
     */
    deletedKeyword(e) {

        this.result = this.listener_keywordOnDelete(e)
        // reset extrudeurs
        this.resetExtrudeurs()
        // on lance les extrudeurs
        this.exctrudeurs()
        return true
    }

}
