export interface Movie {
  id: number;
  name: string;
  genre: string;
  image: string;
  releaseYear: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    name: "Game Night",
    genre: "Action",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "2018",
  },
  {
    id: 2,
    name: "Area X: Annihilation",
    genre: "Adventure",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg",
    releaseYear: "2018",
  },
  {
    id: 3,
    name: "Hannah",
    genre: "Drama",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
    releaseYear: "2018",
  },
  {
    id: 4,
    name: "The Lodgers",
    genre: "Drama",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "2018",
  },
  {
    id: 5,
    name: "Beast of Burden",
    genre: "Action",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg",
    releaseYear: "2018",
  },
  {
    id: 6,
    name: "The Chamber",
    genre: "Horror",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVlODgwMjgtZGUzMy00ZTY1LWIyMDEtYTI2Y2JlYzVjZTNkXkEyXkFqcGdeQXVyNTg0MDM1MzY@._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "2018",
  },
  {
    id: 7,
    name: "Survivors Guide to Prison",
    genre: "Documentary",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzhmNmI5MDMtZDEyOC00ODkyLTkwODItODQzODAzY2QyZjVlXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SY500_CR0,0,357,500_AL_.jpg",
    releaseYear: "2018",
  },
  {
    id: 8,
    name: "Red Sparrow",
    genre: "HMystery",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "2018",
  },
];
