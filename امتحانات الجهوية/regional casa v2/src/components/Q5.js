import React, { useState } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { ADD_COUNTRY, EDIT_POPULATION } from "../actions";

const Q5 = (props) => {
    const [paysExists, setPaysExists] = useState(false); // Si le pays existe déjà
    const [paysName, setPaysName] = useState(""); // Nom du pays depuis le formulaire

    // Fonction qui soumet le formulaire et ajoute un pays ou modifie sa population s'il existe déjà
    function handleSubmit(e) {
        e.preventDefault();

        // Les données du formulaire
        const formDatas = new FormData(e.target);

        // Si le pays existe déjà
        if (paysExists) {
            const population = Number(formDatas.get("population")); // On convertit la population en nombre

            // Données à envoyer au store sous forme d'objet
            const data = {
                name: paysName,
                population,
            };

            // On modifie la population du pays
            props.editPopulation(data);
            e.target.reset();

            // Message de succès
            Swal.fire({
                title: "Population modifiée",
                icon: "success",
                timer: 2000,
            });

            // Si le pays n'existe pas
        } else {
            const surface = Number(formDatas.get("surface")); // On convertit la surface en nombre
            const population = Number(formDatas.get("population")); // On convertit la population en nombre
            const indepYear = Number(formDatas.get("indepYear")); // On convertit l'année d'indépendance en nombre
            const image = formDatas.get("image"); // On récupère l'image

            // Données à envoyer au store sous forme d'objet
            const data = {
                name: paysName,
                surface,
                population,
                indepYear,
                image,
            };

            // On ajoute le pays
            props.addCountry(data);
            e.target.reset();

            // Message de succès
            Swal.fire({
                title: "Pays ajouté",
                icon: "success",
                timer: 2000,
            });
        }
    }

    return (
        <div className="d-flex justify-content-center flex-column">
            <h1 className="text-center">Ajout & modification</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form
                        className="form-group"
                        onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="name">Nom du pays:</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="form-control"
                            onChange={(e) => {
                                setPaysName(e.target.value);
                                setPaysExists(
                                    props.pays.find(
                                        (p) => p.name === e.target.value
                                    )
                                );
                            }}
                        />

                        {paysExists ? (
                            // Si le pays existe déjà, on affiche les champs pour modifier sa population
                            <>
                                <label htmlFor="population">Population:</label>
                                <input
                                    type="number"
                                    name="population"
                                    required
                                    placeholder={
                                        "Population actuelle: " +
                                        props.pays.find(
                                            (p) => p.name === paysName
                                        ).population
                                    }
                                    className="form-control"
                                />
                                <button className="btn btn-primary mt-2">
                                    Modifier
                                </button>
                            </>
                        ) : (
                            // Sinon, on affiche les champs pour ajouter un pays
                            <>
                                <label htmlFor="surface">Surface:</label>
                                <input
                                    type="number"
                                    name="surface"
                                    required
                                    className="form-control"
                                />

                                <label htmlFor="population">Population:</label>
                                <input
                                    type="number"
                                    required
                                    name="population"
                                    className="form-control"
                                />

                                <label htmlFor="indepYear">
                                    Année d'indépendance:
                                </label>
                                <input
                                    type="number"
                                    required
                                    name="indepYear"
                                    className="form-control"
                                />

                                <label htmlFor="image">Image:</label>
                                <input
                                    type="text"
                                    required
                                    name="image"
                                    className="form-control"
                                />

                                <button className="btn btn-primary mt-2">
                                    Ajouter
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

// Recuperation des données du store, mais on ne récupère que les pays
const mapStateToProps = (state) => {
    return {
        pays: state.pays,
    };
};

// Les actions à dispatcher pour ajouter ou modifier un pays, ADD_COUNTRY et EDIT_POPULATION sont des actions créées dans le dossier actions
const mapDispatchToProps = (dispatch) => {
    return {
        addCountry: (data) => dispatch(ADD_COUNTRY(data)),
        editPopulation: (data) => dispatch(EDIT_POPULATION(data)),
    };
};

// Connexion du composant à redux
export default connect(mapStateToProps, mapDispatchToProps)(Q5);
