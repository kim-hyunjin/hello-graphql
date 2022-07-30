import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { ALL_MOVIES } from '../../graphql/query';
import { AllMovies } from '../../graphql/types';

const Movies: NextPage = () => {
  const { data, loading, error } = useQuery<AllMovies>(ALL_MOVIES);
  console.log(data);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    console.error(error);
    return <h1>Could not fertch :(</h1>;
  }
  return (
    <ul>
      {data?.allMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Movies;
