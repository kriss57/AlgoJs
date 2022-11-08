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
    }
})
//si >= 3 lancer la recherche avec la valeur de l'input

// main.search(searchInput)
//     .then(() => {
//         console.log('dans scrpt.js main.search');
//         main.displayAlltags()
//         main.displayRecipeCard()
//     })
//     .catch(err => console.log(err))


//Ajout listener sur les tag    