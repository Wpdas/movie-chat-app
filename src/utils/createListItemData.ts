type ListItemDataInput = {
  title: string;
  year: string;
  runtime: string;
  revenue: string;
  rating: string;
  genre: string[];
};

export type ListItemData = {
  title: string;
  year: string;
  runtime: string;
  revenue: string;
  rating: string;
  genre: string;
};

const createListItemData = ({
  title,
  year,
  runtime,
  revenue,
  rating,
  genre,
}: ListItemDataInput) => {
  const currentRuntime = 0; // to 9h 59m format
  const formatedRevenue = `$${revenue} M`;
  const formatedGenre = genre.join(', ');

  return {
    title,
    year,
    runtime,
    revenue: formatedRevenue,
    rating,
    genre: formatedGenre,
  };
};

export default createListItemData;
