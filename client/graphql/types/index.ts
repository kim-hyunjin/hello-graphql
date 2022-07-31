export interface Movie {
  id: number;
  title: string;
}

export interface AllMovies {
  allMovies: Movie[];
}

export interface MovieData {
  movie: Movie;
}
