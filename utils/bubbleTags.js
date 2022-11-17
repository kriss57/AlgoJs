// ------- Gestion affichage des bulles des tags -------- //

// --- pointer dom
const bubbleContainer = document.querySelector('.bubble_container')
const deleteBtn = document.querySelectorAll('.bubble_closed')


const displayBubbleTags = (tagName) => {

    let bubbleTemplate = `
         <div class="bubble_tag" id="${tagName}-tag">
                <p class="bubble_text">${tagName}</p>
                <img class="bubble_closed" src="./assets/icons/closed.svg" alt="bouton de fermeture">
            </div>
    `
    bubbleContainer.insertAdjacentHTML('beforeend', bubbleTemplate)
}

// ------------------------------------------------------------------------ //
// ---- A faire --- n'existe pas ici ---- traitement de suppréssion des tags
const deleteBubbleTags = () => {
    console.log(deleteBtn);
    deleteBtn.forEach(btn => {
        console.log(btn);
        btn.addEventListener('click', (e) => {
            console.log(e);
        })
    })
}