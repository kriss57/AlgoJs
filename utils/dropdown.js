// ---- Pointer Dom
// dropdown
const ingredientsDropdown = document.querySelector('#first-dropdown')
const appareilsDropdown = document.querySelector('#secondary-dropdown')
const ustensilesDropdown = document.querySelector('#third-dropdown')
// ArrowBtn
const ingredientsBtn = document.getElementById('ingredientsBtn')
const appareilsBtn = document.getElementById('appareilsBtn')
const ustensilesBtn = document.getElementById('ustensilesBtn')

const arrowBtn = document.querySelectorAll('.arrow-down')
//containeur
const ingredientsContainer = document.querySelector('#ingredients-container')
const appareilsContainer = document.querySelector('#appareils-container')
const ustensilesContainer = document.querySelector('#ustensiles-container')
//-- dropdown inputs ingredients
const inputOne = document.getElementById('ingredients-input1')
const inputTwo = document.getElementById('ingredients-input12')


// ----- Ouverture et Fermeture
let isVisible = false

/**
 * Ouverture et fermeture du menu de tri
 */
const toggleDropdown = (container, dropdown, arrowBtn) => {
    let inputClicked = dropdown.childNodes[1].children[0]

    isVisible = !isVisible
    isVisible ? container.classList.add("isVisible") : container.classList.remove("isVisible")
    isVisible ? dropdown.classList.add("resize") : dropdown.classList.remove("resize")
    isVisible ? arrowBtn.classList.add("rotate") : arrowBtn.classList.remove("rotate")

    if (container.id == 'ingredients-container') {
        isVisible ? inputClicked.placeholder = 'Rechercher un ingrédient' : inputClicked.placeholder = 'Ingrédients'
        isVisible ? inputClicked.classList.add('placeholder_color') : inputClicked.classList.remove('placeholder_color')
    }
    if (container.id == 'appareils-container') {
        isVisible ? inputClicked.placeholder = 'Rechercher un appareil' : inputClicked.placeholder = 'Appareils'
        isVisible ? inputClicked.classList.add('placeholder_color') : inputClicked.classList.remove('placeholder_color')
    }
    if (container.id == 'ustensiles-container') {
        isVisible ? inputClicked.placeholder = 'Rechercher un ustensile' : inputClicked.placeholder = 'Ustensiles'
        isVisible ? inputClicked.classList.add('placeholder_color') : inputClicked.classList.remove('placeholder_color')
    }
}

// ------------------------------------------
// -- bascule d'un dropdown a un autre
ingredientsBtn.addEventListener('click', (e) => {
    toggleDropdown(ingredientsContainer, ingredientsDropdown, ingredientsBtn)
    resetDropdown(appareilsDropdown, appareilsContainer, appareilsBtn)
    resetDropdown(ustensilesDropdown, ustensilesContainer, ustensilesBtn)

})
appareilsBtn.addEventListener('click', (e) => {
    toggleDropdown(appareilsContainer, appareilsDropdown, appareilsBtn)
    resetDropdown(ingredientsDropdown, ingredientsContainer, ingredientsBtn)
    resetDropdown(ustensilesDropdown, ustensilesContainer, ustensilesBtn)
})
ustensilesBtn.addEventListener('click', (e) => {
    toggleDropdown(ustensilesContainer, ustensilesDropdown, ustensilesBtn)
    resetDropdown(ingredientsDropdown, ingredientsContainer, ingredientsBtn)
    resetDropdown(appareilsDropdown, appareilsContainer, appareilsBtn)
})

/**
 * 
 * @param {HTMLElement} dropdown 
 * @param {HTMLElement} container 
 * @param {HTMLElement} arrowBtn 
 */
const resetDropdown = (dropdown, container, arrowBtn) => {
    let inputClicked = dropdown.childNodes[1].children[0]
    dropdown.classList.remove("resize")
    container.classList.remove("isVisible")
    arrowBtn.classList.remove("rotate")
    if (container.id == 'ingredients-container') {
        inputClicked.placeholder = 'Ingrédients'
        inputClicked.classList.remove('placeholder_color')
    }
    if (container.id == 'appareils-container') {
        inputClicked.placeholder = 'Appareils'
        inputClicked.classList.remove('placeholder_color')
    }
    if (container.id == 'ustensiles-container') {
        inputClicked.placeholder = 'Ustensiles'
        inputClicked.classList.remove('placeholder_color')
    }
}



