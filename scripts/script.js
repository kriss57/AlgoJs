import { Main } from './Constructor/main.js'

console.log('dans script');
let main = new Main()

// A l'affichage récup all recipes
await main.start()

// Mise en place des tags
main.displayAlltags()   // a voir si on peu lacer ici car les array sont vide a ce moment voir async await
main.displayRecipeCard()

//Ajout du listener sur input
const searchInput = document.getElementById('global-search')
//si >= 3 lancer la recherche avec la valeur de l'input
main.search(searchInput)
    // .then(() => {
    //     main.displayAlltags()
    //     main.displayRecipeCard()
    // })
    // .catch(err => console.log(err))


//Ajout listener sur les tag    