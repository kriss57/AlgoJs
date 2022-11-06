// ---------------------------------- //
// --- Préparation pour back-end --- //

export class Api {
    url = "data/recipes.json"
    /**
     * 
     * @returns response.json()
     */

    async get() {
        console.log('dans get');
        console.log(this.url);
        return fetch(this.url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) { console.log(error); });
    }
}
