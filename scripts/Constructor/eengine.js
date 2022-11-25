import { Api } from '../Api/api.js'




export class Engine extends Api {

    allRecipes = []
    newAllRecipes = { recipes: [] }

    newAllIngredients = []
    newAllAppareils = []
    newAllUstensils = []

    //--- array de liste tag apres recherche
    newArray = []
    //--- array de mot-clé
    arrKeyWord = []

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

        //recherche dans this.allRecipes avec includes()
        for (let i = 0; i < this.allRecipes.recipes.length; i++) {
            if (this.allRecipes.recipes[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
                this.newAllRecipes.recipes.push(this.allRecipes.recipes[i])
            }
            if (this.allRecipes.recipes[i].description.toLowerCase().includes(e.target.value.toLowerCase())) {
                this.newAllRecipes.recipes.push(this.allRecipes.recipes[i])
            }

            for (let j = 0; j < this.allRecipes.recipes[i].ingredients.length; j++) {
                if (this.allRecipes.recipes[i].ingredients[j].ingredient.toLowerCase().includes(e.target.value.toLowerCase())) {
                    this.newAllRecipes.recipes.push(this.allRecipes.recipes[i])
                }
            }

        }

        //Enleve les doublons du tableau
        let recipes = Array.from(new Set(this.newAllRecipes.recipes))
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

    /**
    * Recherche par mot clé 
    * @param {Events} e 
    * @returns Array
    */
    search_by_keyword(e) { // pour le moment ne gere que l'ajout


        // pointer dom
        let selectedFilter = e.target.innerText
        let displayedArray = this.result.recipes

        // stock value dans array 
        this.arrKeyWord.push(selectedFilter.toLowerCase())

        console.log(this.result);
        // test change this.allRecipes.recipes PAR this.result.recipes
        this.newAllRecipes = { recipes: [] }

        if (e.target.parentNode.id === 'ingredients-list') {
            // stock value dans array 
            for (let i = 0; i < displayedArray.length; i++) {
                for (let j = 0; j < displayedArray[i].ingredients.length; j++) {
                    if (displayedArray[i].ingredients[j].ingredient.toLowerCase().includes(selectedFilter.toLowerCase())) {
                        this.newAllRecipes.recipes.push(displayedArray[i])
                    }
                }
            }
        }

        if (e.target.parentNode.id === 'appareils-list') {
            // stock value dans array 
            displayedArray.find(el => {
                if (el.appliance.toLowerCase().includes(selectedFilter.toLowerCase())) {
                    this.newAllRecipes.recipes.push(el)
                }

            })
        }

        if (e.target.parentNode.id === 'ustensiles-list') {
            // stock value dans array 
            for (let i = 0; i < displayedArray.length; i++) {
                for (let j = 0; j < displayedArray[i].ustensils.length; j++) {
                    if (displayedArray[i].ustensils[j].toLowerCase().includes(selectedFilter.toLowerCase())) {
                        this.newAllRecipes.recipes.push(displayedArray[i])
                    }
                }
            }
        }

        // efface les cartes
        this.resetDisplayer()
        // return un tableau de recette
        return this.newAllRecipes
    }




    listener_keywordOnDelete(e) {

        let bubble = e.target.parentNode
        // recup nom du tag a delete
        let nameTag = e.target.parentNode.children[0].innerText.toLowerCase()
        // efface la bubble du dom
        bubble.remove()
        // supprime le nom du tableau
        this.deletedTagInArray(nameTag)
        // relance une recherche
        return this.search_by_keywordOnDelete()
    }

    /**
     * recherche par mot clé a la suppréssion du tag
     * @param {array} arr 
     * @returns array
     */
    search_by_keywordOnDelete() {
        //this.new = { recipes: [] }
        // Ici on récupere l'array de 50 recettes
        let allRecipes = this.allRecipes.recipes

        //retourne toute les recettes mais il faut encore traiter l'input !!!!!!
        console.log(this.arrKeyWord.length);
        if (this.arrKeyWord.length === 0) {
            console.log(this.allRecipes);
            return this.allRecipes
        } else {
            for (let i = 0; i < this.arrKeyWord.length; i++) {

                let selectedFilter = this.arrKeyWord[i]

                // recherche par ingredients
                for (let i = 0; i < allRecipes.length; i++) {
                    for (let j = 0; j < allRecipes[i].ingredients.length; j++) {
                        if (allRecipes[i].ingredients[j].ingredient.toLowerCase().includes(selectedFilter.toLowerCase())) {
                            this.newAllRecipes.recipes.push(allRecipes[i])
                        }
                    }
                }


                // recherche par Appareil
                allRecipes.find(el => {
                    if (el.appliance.toLowerCase().includes(selectedFilter.toLowerCase())) {
                        this.newAllRecipes.recipes.push(el)
                    }

                })


                // recherche par ustensils
                for (let i = 0; i < allRecipes.length; i++) {
                    for (let j = 0; j < allRecipes[i].ustensils.length; j++) {
                        if (allRecipes[i].ustensils[j].toLowerCase().includes(selectedFilter.toLowerCase())) {
                            this.newAllRecipes.recipes.push(allRecipes[i])
                        }
                    }
                }

            }
        }


        let recipes = Array.from(new Set(this.newAllRecipes.recipes))
        //Convert en objet avant l'envoi
        this.newAllRecipes = { recipes }
        // return un tableau de recette
        return this.newAllRecipes

    }

    /**
     * suprression du mot clé dans l'array de mot clé
     * @param {string} nameTag 
     */
    deletedTagInArray(nameTag) {

        const filterednameTag = this.arrKeyWord.filter((name) => name !== nameTag)

        this.arrKeyWord = filterednameTag

        console.log(this.arrKeyWord);


    }

}

