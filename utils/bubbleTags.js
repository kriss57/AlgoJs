// ------- Gestion affichage des bulles des tags -------- //

// --- pointer dom
const bubbleContainer = document.querySelector('.bubble_container')
const deleteBtn = document.querySelectorAll('.bubble_closed')

/**
 * Affiche les bulles de tags
 * @param {Event} e 
 */
const displayBubbleTags = (e) => {

    // pointeur dom pour gestion dropdown
    let containeur = e.target.parentNode.parentNode
    let dropdown = e.target.parentNode.parentNode.parentNode
    let arrowBtn = e.target.parentNode.parentNode.parentNode.childNodes[1].children[1]


    let listName = e.target.parentNode.id
    let tagName = e.target.innerText
    let className

    if (listName == 'ingredients-list') {
        className = 'bubble_tag_ingredients'
        toggleDropdown(containeur, dropdown, arrowBtn)

    }
    if (listName == 'appareils-list') {
        className = 'bubble_tag_appareils'
        toggleDropdown(containeur, dropdown, arrowBtn)

    }
    if (listName == 'ustensiles-list') {
        className = 'bubble_tag_ustensiles'
        toggleDropdown(containeur, dropdown, arrowBtn)

    }

    let bubbleTemplate = `
         <div class="${className}" >
                <p class="bubble_text">${tagName}</p>
                <img class="bubble_closed" src="./assets/icons/closed.svg" alt="bouton de fermeture">
            </div>
    `
    bubbleContainer.insertAdjacentHTML('beforeend', bubbleTemplate)


}

