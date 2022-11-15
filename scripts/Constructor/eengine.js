import { Api } from '../Api/api.js'
//import { Main } from './main.js'



export class Engine extends Api {

    allRecipes = []
    newAllRecipes = { recipes: [] }

    newAllIngredients = []
    newAllAppareils = []
    newAllUstensils = []

    newArray = []

    async getAll() {
        console.log('dans getall');
        this.allRecipes = await this.get()
        return this.allRecipes
    }

    resetDisplayer() {
        // --- pointer Dom
        console.log('dans reset displayer');
        const cardContaineur = document.querySelector('.card_container')
        const allListContainer = document.getElementsByTagName('ul')
        cardContaineur.innerHTML = ''
        // A VOIR ********************************
        for (let list of allListContainer) {
            console.log(list);
            list.innerHTML = ''
        }

    }


    engine_search(e) {
        // les algo

        this.resetDisplayer()
        //reset newarray
        this.newAllRecipes = { recipes: [] }

        let inputUser = e.target.value.toLowerCase()
        let data = this.allRecipes.recipes

        // recherche recettes name
        let nameSearch = data.filter(el => el.name.toLowerCase().includes(inputUser))
        // recherche recette description
        let descSearch = data.filter(el => el.description.toLowerCase().includes(inputUser))
        //recherche recette ingrédients
        let ing = data.filter(el => {
            return el.ingredients.find(element => element.ingredient.toLowerCase().includes(inputUser))
        })

        let arr = this.newAllRecipes.recipes.concat(nameSearch, descSearch, ing)
        console.log(arr);

        // //Enleve les doublons du tableau
        let recipes = Array.from(new Set(arr))
        //Convert en objet avant l'envoi
        this.newAllRecipes = { recipes }
        // return un tableau de recette
        return this.newAllRecipes

    }

    engine_search_tag(e) {
        let listName = (e.target.parentNode.nextSibling.nextSibling.childNodes[1])
        //ingredients  a prendre dans le dom a l'instanté
        console.log('dans engine_search_tag');
        console.log(this.ingredients);
        this.newAllIngredients = [] // NEW TAB
        this.newAllAppareils = []
        this.newAllUstensils = []
        this.newArray = []
        // cheked tout les ingredient
        // **** voir si boucle for ou map ou.....
        let ingredientsList = this.ingredients // API TAB
        let appareilsList = this.appliances
        let ustensilsList = this.ustensils
        let list = ''


        if (listName.id == 'ingredients-list') {
            list = ingredientsList
            this.newArray = this.newAllIngredients
        }
        if (listName.id == 'appareils-list') {
            list = appareilsList
            this.newArray = this.newAllAppareils
        }
        if (listName.id == 'ustensiles-list') {
            list = ustensilsList
            this.newArray = this.newAllUstensils
        }

        for (let i = 0; i < list.length; i++) {
            console.log(list[i]);
            if (list[i].toLowerCase().includes(e.target.value.toLowerCase())) {
                this.newArray.push(list[i])
            }
        }
        // retourné le nouveau tableaux
        console.log(this.newArray);
        return this.newArray // ENVOI NEW TAb

    }

    search_by_keyword(e) { // pour le moment ne gere que l'ajout

        // pointer dom
        let selectedFilter = e.target.innerText
        let displayedArray = this.result.recipes

        console.log(this.result);
        // test change this.allRecipes.recipes PAR this.result.recipes
        this.newAllRecipes = { recipes: [] }

        if (e.target.parentNode.id === 'ingredients-list') {
            for (let i = 0; i < displayedArray.length; i++) {
                for (let j = 0; j < displayedArray[i].ingredients.length; j++) {
                    if (displayedArray[i].ingredients[j].ingredient.toLowerCase().includes(selectedFilter.toLowerCase())) {
                        this.newAllRecipes.recipes.push(displayedArray[i])
                    }
                }
            }
            console.log(this.newAllRecipes);
            // efface les cartes
            this.resetDisplayer()
            // return un tableau de recette
            return this.newAllRecipes
        }
        if (e.target.parentNode.id === 'appareils-list') {
            console.log('appareils-list');
            console.log(selectedFilter);
            displayedArray.find(el => {
                if (el.appliance.toLowerCase().includes(selectedFilter.toLowerCase())) {
                    this.newAllRecipes.recipes.push(el)
                }

            })
            console.log(this.newAllRecipes);
            // efface les cartes
            this.resetDisplayer()
            // return un tableau de recette
            return this.newAllRecipes
        }
        if (e.target.parentNode.id === 'ustensiles-list') {
            for (let i = 0; i < displayedArray.length; i++) {
                for (let j = 0; j < displayedArray[i].ustensils.length; j++) {
                    if (displayedArray[i].ustensils[j].toLowerCase().includes(selectedFilter.toLowerCase())) {
                        this.newAllRecipes.recipes.push(displayedArray[i])
                    }
                }
            }
            console.log(this.newAllRecipes);
            // efface les cartes
            this.resetDisplayer()
            // return un tableau de recette
            return this.newAllRecipes
        }
    }

}

