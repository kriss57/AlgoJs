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
    //listBottom.classList.toggle("isVisible")  // method toggle()
    isVisible = !isVisible  // version ternere
    isVisible ? container.classList.add("isVisible") : container.classList.remove("isVisible")
    isVisible ? dropdown.classList.add("resize") : dropdown.classList.remove("resize")
    isVisible ? arrowBtn.classList.add("rotate") : arrowBtn.classList.remove("rotate")

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


// for (let i = 0; i < arrowBtn.length; i++) {
//     arrowBtn[i].addEventListener('click', (e) => {
//         console.log(e.target.parentNode.id);
//         if (e.target.parentNode.id === 'ingredientsBtn') {
//             toggleDropdown(ingredientsContainer, ingredientsDropdown, ingredientsBtn)
//             resetDropdown(appareilsDropdown, appareilsContainer, appareilsBtn)
//             resetDropdown(ustensilesDropdown, ustensilesContainer, ustensilesBtn)

//         }
//         if (e.target.parentNode.id === 'appareilsBtn') {
//             toggleDropdown(appareilsContainer, appareilsDropdown, appareilsBtn)
//             resetDropdown(ingredientsDropdown, ingredientsContainer, ingredientsBtn)
//             resetDropdown(ustensilesDropdown, ustensilesContainer, ustensilesBtn)


//         }
//         if (e.target.parentNode.id === 'ustensilesBtn') {
//             toggleDropdown(ustensilesContainer, ustensilesDropdown, ustensilesBtn)
//             resetDropdown(ingredientsDropdown, ingredientsContainer, ingredientsBtn)
//             resetDropdown(appareilsDropdown, appareilsContainer, appareilsBtn)
//         }
//     })
// }
const resetDropdown = (dropdown, container, arrowBtn) => {
    dropdown.classList.remove("resize")
    container.classList.remove("isVisible")
    arrowBtn.classList.remove("rotate")
}



