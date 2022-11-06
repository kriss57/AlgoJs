

export class Recipe {

    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.appliance = data.appliance
        this.time = data.time
        this.description = data.description
        this.ingredients = data.ingredients
    }

    /**
     * 
     * @param {*} property 
     * @returns this[property] of Recipes
     */
    get(property) {
        if (isset(this[property])) {
            return this[property]
        }
    }

    /**
     * 
     * @returns 
     * card template
     */
    getRecipeCardDOM(ingredientsArr) {

        let ingredient = this.ingredients[0].ingredient
        let quantity = this.ingredients[0].quantity
        let unit = this.ingredients[0].unit


        let ingredientList = ''

        for (let i = 0; i < ingredientsArr.length; i++) {
            // console.log(ingredientsArr[i]);
            // console.log(ingredientsArr[i].ingredient);
            ingredientList += `
                <li><b>${ingredientsArr[i].ingredient}</b> : ${ingredientsArr[i].quantity !== undefined ? ingredientsArr[i].quantity : ''} ${ingredientsArr[i].unit !== undefined ? ingredientsArr[i].unit : ''}</li>
           
            `
        }

        let card = `
           <article class="card">
                <div class="card_img">Image</div>
                <div class="card_info">
                    <div class="top_card_info">
                        <h2>${this.name}</h2>
                        <p>${this.time} min</p>
                    </div>
                    <div class="bottom_card_info">
                        <div class="info_ingredients">
                        ${ingredientList}
                        </div>
                        <div class="info_description">${this.description}</div>
                    </div>
                </div>
                <p></p>
            </article>
        `
        return card
    }


}



