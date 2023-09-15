import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Q3 = (props) => {
  // Récupérer tout les pays depuis le store
  const { allPays } = props;
  // Récupérer l'année d'indépendance depuis l'url
  const { indepYear } = useParams();
  // Si l'année d'indépendance est définie, on filtre les pays par elle, sinon on affiche tout les pays
  const pays = indepYear
    ? allPays.filter((p) => p.indepYear === Number(indepYear))
    : allPays;
  return (
    <div className="row d-flex justify-content-center">
      <h3>
        {indepYear
          ? `Pays indépendant en ${indepYear}` // Si l'année est définie
          : "Tous les pays"}{" "}
      </h3>

      {pays.length > 0 ? (
        // Si il y a des pays on les afficher
        pays.map((p, i) => {
          return (
            <div className="card m-3 col-md-2 col-sm-6" key={i}>
              <h5
                className="card-title"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "13px 13px ",
                  boxShadow: "12px 10px 9px 0 grey",
                }}
              >
                {p.name}
              </h5>
              <img src={p.image} className="card-img-top my-3" alt={p.name} />
              <div className="card-body">
                <p className="card-text">
                  <strong>Superficie:</strong>{" "}
                  {p.surface.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  km² <br />
                  <strong>Population:</strong>{" "}
                  {p.population > 1_000_000_000
                    ? (p.population / 1_000_000_000).toFixed(2) + " milliards"
                    : p.population > 1_000_000
                    ? (p.population / 1_000_000).toFixed(2) + " millions"
                    : p.population > 1_000
                    ? (p.population / 1_000).toFixed(2) + " milliers"
                    : p.population}{" "}
                  <br />
                </p>
              </div>
            </div>
          );
        })
      ) : (
        // Sinon on affiche un message d'erreur
        <h1 className="text-center">Aucun pays trouvé</h1>
      )}
    </div>
  );
};

// Récupérer les pays du store, pour les afficher
const mapStateToProps = (state) => {
  return {
    allPays: state.pays,
  };
};

// Connecter le composant au store
export default connect(mapStateToProps, null)(Q3);
