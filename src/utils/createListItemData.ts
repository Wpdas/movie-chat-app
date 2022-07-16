import minutesToHoursAndMinutes from './minutesToHoursAndMinutes';

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
  const currentRuntime = minutesToHoursAndMinutes(Number(runtime));
  const formatedRevenue = `$${revenue} M`;
  const formatedGenre = genre.join(', ');

  return {
    title,
    year,
    runtime: currentRuntime,
    revenue: formatedRevenue,
    rating,
    genre: formatedGenre,
  };
};

export default createListItemData;
