export interface Movie {
  id: number;
  title: string;
  medium_cover_image: string;
  rating: number;
}

export interface AllMovies {
  allMovies: Movie[];
}

export interface MovieData {
  movie: Movie;
}
