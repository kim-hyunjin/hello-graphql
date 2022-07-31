import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { GET_MOVIE } from '../../graphql/query';
import { MovieData } from '../../graphql/types';

const Movie: NextPage = () => {
  const router = useRouter();
  const movieId = router.query.id;
  const { data, loading, error } = useQuery<MovieData>(GET_MOVIE, { variables: { movieId } });
  if (loading) {
    return <h1>Fetching Movie...</h1>;
  }
  if (error) {
    return <h1>Could not fetch :(</h1>;
  }
  return <div>{data?.movie.title}</div>;
};

export default Movie;
