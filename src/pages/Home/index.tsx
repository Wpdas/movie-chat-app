import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dropdown from '@app/components/Dropdown';
import { GENRES_ITEMS } from '@app/constants';
import useFuzzySearchMovies from '@app/hooks/useFuzzySearchMovies';
import filterByGenre from '@app/utils/filterByGenre';
import { BoxContainer, StyledTableCell, StyledTableRow } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const [titleFilter, setTitleFilter] = useState('a');
  const [genreFilter, setGenreFilter] = useState(GENRES_ITEMS[0].value);
  const search = useFuzzySearchMovies(titleFilter, 400);
  const moviesList = filterByGenre(search.result, genreFilter);

  const onChangeTitleFilter = (value: string) => {
    if (value) {
      setTitleFilter(value);
    }
  };

  const onChangeSelectHandler = (value: string) => {
    setGenreFilter(value);
  };

  const clickRowHandler = (movieTitle: string) => {
    history.push(`/chat/${movieTitle}`);
  };

  return (
    <BoxContainer maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Year</StyledTableCell>
              <StyledTableCell align="right">Runtime</StyledTableCell>
              <StyledTableCell align="right">Revenue</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
              <StyledTableCell align="right">Genres</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow style={{ background: '#fff' }}>
              <StyledTableCell>
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Filter by title"
                  variant="standard"
                  onChange={event => onChangeTitleFilter(event.target.value)}
                />
              </StyledTableCell>
              <StyledTableCell align="right" />
              <StyledTableCell align="right" />
              <StyledTableCell align="right" />
              <StyledTableCell align="right" />
              <StyledTableCell align="left">
                <Dropdown
                  defaultValue="All"
                  items={GENRES_ITEMS}
                  onChange={onChangeSelectHandler}
                />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
          <TableBody>
            {moviesList.map(movie => (
              <StyledTableRow
                key={movie.title}
                onClick={() => clickRowHandler(movie.title)}>
                <StyledTableCell component="th" scope="row">
                  {movie.title}
                </StyledTableCell>
                <StyledTableCell align="left">{movie.year}</StyledTableCell>
                <StyledTableCell align="left">{movie.runtime}</StyledTableCell>
                <StyledTableCell align="left">{movie.revenue}</StyledTableCell>
                <StyledTableCell align="left">{movie.rating}</StyledTableCell>
                <StyledTableCell align="left">{movie.genre}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BoxContainer>
  );
};

export default Home;
