// ---- Pointer Dom
//dropdown
const ingredientsDropdown = document.querySelector('#first-dropdown')
const appareilsDropdown = document.querySelector('#secondary-dropdown')
const ustensilesDropdown = document.querySelector('#third-dropdown')

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
const toggleDropdown = (container, dropdown) => {
    //listBottom.classList.toggle("isVisible")  // method toggle()
    isVisible = !isVisible  // version ternere
    isVisible ? container.classList.add("isVisible") : container.classList.remove("isVisible")
    isVisible ? dropdown.classList.add("resize") : dropdown.classList.remove("resize")
    //isVisible ? arrowBtn.classList.add("rotate") : arrowBtn.classList.remove("rotate")

}
for (let i = 0; i < arrowBtn.length; i++) {
    arrowBtn[i].addEventListener('click', (e) => {
        // console.log(e.target.parentNode.id);
        if (e.target.parentNode.id === 'ingredientsBtn') {
            toggleDropdown(ingredientsContainer, ingredientsDropdown)
            resetDropdown(appareilsDropdown, appareilsContainer)
            resetDropdown(ustensilesDropdown, ustensilesContainer)

        }
        if (e.target.parentNode.id === 'appareilsBtn') {
            toggleDropdown(appareilsContainer, appareilsDropdown)
            resetDropdown(ingredientsDropdown, ingredientsContainer)
            resetDropdown(ustensilesDropdown, ustensilesContainer)


        }
        if (e.target.parentNode.id === 'ustensilesBtn') {
            toggleDropdown(ustensilesContainer, ustensilesDropdown)
        }
    })
}
const resetDropdown = (dropdown, container) => {
    dropdown.classList.remove("resize")
    container.classList.remove("isVisible")
}
const timerDropdown = () => {
    // ajout timer 
    if (isVisible) {
        window.setTimeout(() => {
            container.classList.remove("isVisible")
            //arrowImg.classList.remove("rotate")
        }, 10000)
    }
}


