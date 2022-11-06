import { Api } from '../Api/api.js'

export class Engine extends Api {

    allRecipes = []
    newAllRecipes = []

    async getAll() {
        console.log('dans getall');
        this.allRecipes = await this.get()
        return this.allRecipes
    }


    engine_search(searchInput) {
        // les algo
        console.log(searchInput);
        searchInput.addEventListener('input', (e) => {
            console.log(e);
            console.log(e.target.value.length);
            if (e.target.value.length >= 3) {
                console.log(e.target.value);
                //recherche dans this.allRecipes avec include()
            }
        })

        // return un tableau de recette
        //console.log(this.newAllRecipes);
        //return this.newAllRecipes
    }
}
