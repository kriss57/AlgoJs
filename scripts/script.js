import { Main } from './Constructor/main.js'


console.log('dans script');
let main = new Main()

// A l'affichage récup all recipes
await main.start()

// Mise en place des tags
main.displayAlltags()
main.displayRecipeCard()


//Ajout du listener sur input
const searchInput = document.getElementById('global-search')
searchInput.addEventListener('input', (e) => {

    if (e.target.value.length >= 3) {
        main.search(e)
            .then(() => {
                console.log('dans scrpt.js main.search');
                main.displayAlltags()
                main.displayRecipeCard()
            })
            .catch(err => console.log(err))
    } else {
        main.resetStart()
    }
})

//Ajout des listener sur les inputs tags
const inputIngredient = document.getElementById('ingredients-input')
const inputAppareils = document.getElementById('appareils-input')
const inputUstensils = document.getElementById('ustensiles-input')

inputIngredient.addEventListener('input', (e) => { main.searchTag(e) })
inputAppareils.addEventListener('input', (e) => { main.searchTag(e) })
inputUstensils.addEventListener('input', (e) => { main.searchTag(e) })

//Ajout des listener sur les tags clické
const ingredientsTags = document.getElementById('ingredients-list')
const appareilsTags = document.getElementById('appareils-list')
const ustensilsTags = document.getElementById('ustensiles-list')

ingredientsTags.addEventListener('click', (e) => {
    main.searchKeyword(e);
    main.displayAlltags()
    main.displayRecipeCard()
})
appareilsTags.addEventListener('click', (e) => {
    main.searchKeyword(e);
    main.displayAlltags()
    main.displayRecipeCard()
})
ustensilsTags.addEventListener('click', (e) => {
    main.searchKeyword(e);
    main.displayAlltags()
    main.displayRecipeCard()
})