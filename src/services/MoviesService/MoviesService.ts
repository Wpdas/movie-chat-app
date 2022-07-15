import Api from '../Api';
import moviesResponse from '../mock/movies.json';
import { GetMoviesResponse } from './types';

// export const getMovies = (): Promise<GetMoviesResponse> =>
//   Api.get('movies.json').then(result => result.data);

// Using mocked data because of the CORS blocker.
export const getMovies = (): Promise<GetMoviesResponse> =>
  Promise.resolve(moviesResponse);
