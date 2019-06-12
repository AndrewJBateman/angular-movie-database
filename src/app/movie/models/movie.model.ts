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
    name: 'Game Night',
    genre: 'Action',
    image: 'MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    releaseYear: '2018',
  },
  {
    id: 2,
    name: 'Area X: Annihilation',
    genre: 'Adventure',
    image: 'MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg',
    releaseYear: '2018',
  },
  {
    id: 3,
    name: 'Hannah',
    genre: 'Drama',
    image: 'MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg',
    releaseYear: '2018',
  },
  {
    id: 4,
    name: 'The Lodgers',
    genre: 'Drama',
    image: 'MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    releaseYear: '2018',
  },

];
