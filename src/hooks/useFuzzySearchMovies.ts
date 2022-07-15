import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { getMovies, Movie } from '@app/services/MoviesService';
import createListItemData, {
  ListItemData,
} from '@app/utils/createListItemData';

const useFuzzySearchMovies = (searchPattern?: string, limit?: number) => {
  const [fuse, setFuse] = useState<Fuse<Movie>>();
  const [result, setResult] = useState<ListItemData[]>([]);

  useEffect(() => {
    getMovies().then(moviesData => {
      const fuseOptions = {
        includeScore: true,
        keys: ['title', 'genre'],
      };
      const currentFuse = new Fuse(moviesData, fuseOptions);
      setFuse(currentFuse);
    });
  }, []);

  useEffect(() => {
    if (fuse) {
      const currentResult = fuse.search(searchPattern || '');
      const limitedCurrentResult = currentResult.slice(0, limit || 25);
      const finalResult = limitedCurrentResult.map(movieData =>
        createListItemData(movieData.item),
      );

      setResult(finalResult);
    }
  }, [searchPattern, limit, fuse]);

  return {
    result,
  };
};

export default useFuzzySearchMovies;
