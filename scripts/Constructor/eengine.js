import { Api } from '../Api/api.js'


export class Engine extends Api {

    allRecipes = []
    newAllRecipes = { recipes: [] }


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
        console.log(e);


        this.resetDisplayer()
        //reset newarray
        this.newAllRecipes = { recipes: [] }

        //recherche dans this.allRecipes avec include()
        for (let i = 0; i < this.allRecipes.recipes.length; i++) {
            if (this.allRecipes.recipes[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
                this.newAllRecipes.recipes.push(this.allRecipes.recipes[i])
            }
            // voir si il n'existe deja pas dans newarray
            if (this.allRecipes.recipes[i].description.toLowerCase().includes(e.target.value.toLowerCase())) {
                this.newAllRecipes.recipes.push(this.allRecipes.recipes[i])
            }

            for (let j = 0; j < this.allRecipes.recipes[i].ingredients.length; j++) {
                //console.log(this.allRecipes.recipes[i].ingredients[j].ingredient);
                if (this.allRecipes.recipes[i].ingredients[j].ingredient.toLowerCase().includes(e.target.value.toLowerCase())) {
                    this.newAllRecipes.recipes.push(this.allRecipes.recipes[i])
                }
            }

        }


        //Enleve les doublons du tableau
        let recipes = Array.from(new Set(this.newAllRecipes.recipes))
        //Convert en objet avant l'envoi
        this.newAllRecipes = { recipes }
        console.log(this.newAllRecipes);
        // return un tableau de recette
        return this.newAllRecipes

    }

}


