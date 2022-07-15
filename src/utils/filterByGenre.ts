import { ListItemData } from '@app/utils/createListItemData';

const filterByGenre = (movies: ListItemData[], genre: string, limit = 10) => {
  if (genre === 'All') {
    return movies.slice(0, limit || 25);
  }

  return movies
    .filter(movie => movie.genre.indexOf(genre) !== -1)
    .slice(0, limit || 25);
};

export default filterByGenre;
