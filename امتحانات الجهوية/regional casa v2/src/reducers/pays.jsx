const pays = (
  state = [
    {
      id: 5,
      name: "Maroc",
      continent: "Afrique",
      surface: 446550,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/2000px-Flag_of_Morocco.svg.png",
      indepYear: 1956,
      population: 36029138,
      cities: [
        {
          name: "Rabat",
          district: "Rabat-Salé-Kénitra",
          population: 3743835,
          capitale: true,
        },
        {
          name: "Casablanca",
          district: "Grand Casablanca",
          population: 181176,
          capitale: false,
        },
      ],
    },
    {
      id: 10,
      name: "USA",
      continent: "Amérique du Nord",
      surface: 9834000000,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_the_United_States_%281912-1959%29.svg",
      indepYear: 1830,
      population: 3319000000,
      cities: [
        {
          name: "Washington",
          district: "Région de Washington-Capitale",
          population: 1743835,
          capitale: true,
        },
        {
          name: "Liège",
          district: "Wallonie",
          population: 181176,
          capitale: false,
        },
      ],
    },

    {
      id: 2,
      name: "Belgique",
      continent: "Europe",
      surface: 30510,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/2000px-Flag_of_Belgium.svg.png",
      indepYear: 1830,
      population: 11422000,
      cities: [
        {
          name: "Bruxelles",
          district: "Région de Bruxelles-Capitale",
          population: 1743835,
          capitale: true,
        },
        {
          name: "Liège",
          district: "Wallonie",
          population: 181176,
          capitale: false,
        },
      ],
    },
    {
      id: 1,
      name: "France",
      continent: "Europe",
      surface: 551500,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2000px-Flag_of_France.svg.png",
      indepYear: 1789,
      population: 66991000,
      cities: [
        {
          name: "Paris",
          district: "Île-de-France",
          population: 2243835,
          capitale: true,
        },
        {
          name: "Marseille",
          district: "Provence-Alpes-Côte d'Azur",
          population: 868176,
          capitale: false,
        },
      ],
    },

    {
      id: 6,
      name: "Tunisie",
      continent: "Afrique",
      surface: 163610,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/2000px-Flag_of_Tunisia.svg.png",
      indepYear: 1956,
      population: 11532127,
      cities: [
        {
          name: "Tunis",
          district: "Tunis",
          population: 3743835,
          capitale: true,
        },
        {
          name: "Sfax",
          district: "Sfax",
          population: 181176,
          capitale: false,
        },
      ],
    },
    {
      id: 3,
      name: "Allemagne",
      continent: "Europe",
      surface: 357021,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2000px-Flag_of_Germany.svg.png",
      indepYear: 1871,
      population: 83149300,
      cities: [
        {
          name: "Berlin",
          district: "Berlin",
          population: 3743835,
          capitale: true,
        },
        {
          name: "Hambourg",
          district: "Hambourg",

          population: 181176,
          capitale: false,
        },
      ],
    },
    {
      id: 4,
      name: "Espagne",
      continent: "Europe",
      surface: 505990,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2000px-Flag_of_Spain.svg.png",
      indepYear: 1492,
      population: 46704314,
      //   population: 4670,
      cities: [
        {
          name: "Madrid",
          district: "Madrid",
          population: 3743835,
          capitale: true,
        },
        {
          name: "Barcelone",
          district: "Catalogne",
          population: 181176,
          capitale: false,
        },
      ],
    },

    {
      id: 9,
      name: "Argentine",
      continent: "Amérique du Sud",
      surface: 2780000,
      image:
        " https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Argentine_Teniente_General_%281894-1904%29.svg",
      indepYear: 1810,
      population: 458100000,
      cities: [
        {
          name: "Lagos",
          district: "Lagos",
          population: 13000000,
          capitale: false,
        },
        {
          name: "Buenos Aires",
          district: "FCT",
          population: 2000000,
          capitale: true,
        },
      ],
    },
    {
      id: 7,
      name: "Chine",
      continent: "Asie",
      surface: 9596960,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2000px-Flag_of_the_People%27s_Republic_of_China.svg.png",
      indepYear: 1949,
      population: 1439323776,
      cities: [
        {
          name: "Pékin",
          district: "Pékin",
          population: 13000000,
          capitale: true,
        },
        {
          name: "Shanghai",
          district: "Shanghai",
          population: 2000000,
          capitale: false,
        },
      ],
    },
    {
      id: 8,
      name: "Japon",
      continent: "Asie",
      surface: 377835,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2000px-Flag_of_Japan.svg.png",
      indepYear: 1945,
      population: 126476461,
      cities: [
        {
          name: "Tokyo",
          district: "Tokyo",
          population: 13000000,
          capitale: true,
        },
        {
          name: "Osaka",
          district: "Osaka",
          population: 2000000,
          capitale: false,
        },
      ],
    },
  ],
  action
) => {
  switch (action.type) {
    // Ajoute un pays dans le store, payload contient les données du pays à ajouter: name, surface, population, indepYear et image
    case "ADD_COUNTRY":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload.name,
          surface: action.payload.surface,
          population: action.payload.population,
          indepYear: action.payload.indepYear,
          image: action.payload.image,
        },
      ];

    // Modifie la population d'un pays dans le store, payload contient le nom du pays et la nouvelle population
    case "EDIT_POPULATION":
      return state.map((pays) => {
        if (pays.name === action.payload.name) {
          return {
            ...pays,
            population: action.payload.population,
          };
        }
        return pays;
      });

    // La fonction retourne le state par défaut
    default:
      return state;
  }
};

export default pays;
