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

    console.log(e.target.value);
    console.log(searchInput);
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

