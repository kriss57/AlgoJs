import { Main } from './Constructor/main.js'


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
        let t0 = performance.now()
        main.search(e)
            .then(() => {
                console.log('dans scrpt.js main.search');
                main.displayAlltags()
                main.displayRecipeCard()
            })
            .catch(err => console.log(err))
        let t1 = performance.now()
        console.log('l appel de main.search() a demandé' + (t1 - t0) + 'millisecondes')

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
    displayBubbleTags(e)
    listenerDeletedKeyWord()
    main.searchKeyword(e);
    main.displayAlltags()
    main.displayRecipeCard()

})
appareilsTags.addEventListener('click', (e) => {
    displayBubbleTags(e)
    listenerDeletedKeyWord()
    main.searchKeyword(e);
    main.displayAlltags()
    main.displayRecipeCard()
})
ustensilsTags.addEventListener('click', (e) => {
    displayBubbleTags(e)
    listenerDeletedKeyWord()
    main.searchKeyword(e);
    main.displayAlltags()
    main.displayRecipeCard()
})

/**
 * Mise en écoute pour la suppréssion d'un tag
 */
const listenerDeletedKeyWord = () => {
    const bubbleTag = document.querySelectorAll('.bubble_closed')
    bubbleTag.forEach(bubble => {
        bubble.addEventListener('click', (e) => {
            main.deletedKeyword(e)
            main.resetDisplayer()
            main.displayAlltags()
            main.displayRecipeCard()
        })
    })
}