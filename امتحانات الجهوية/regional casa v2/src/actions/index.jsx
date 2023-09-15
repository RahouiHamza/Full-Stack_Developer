// Fonction qui permet d'ajouter un pays dans le store,
// data contient les données du pays à ajouter: name, surface, population, indepYear et image
function ADD_COUNTRY(data) {
    return {
        type: "ADD_COUNTRY",
        payload: data,
    };
}

// Fonction qui permet de modifier la population d'un pays dans le store,
// data contient le nom du pays et la nouvelle population
function EDIT_POPULATION(data) {
    return {
        type: "EDIT_POPULATION",
        payload: data,
    };
}

export { ADD_COUNTRY, EDIT_POPULATION };
