import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useFuzzySearchMovies from '@app/hooks/useFuzzySearchMovies';
import { getMovies } from '@app/services/MoviesService';
import createListItemData from '@app/utils/createListItemData';
import { BoxContainer, StyledTableCell, StyledTableRow } from './styles';

const Home: React.FC = () => {
  const search = useFuzzySearchMovies('sing', 10);

  return (
    <BoxContainer maxWidth={false}>
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
            {search.result.map(row => (
              <StyledTableRow key={row.title}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">{row.year}</StyledTableCell>
                <StyledTableCell align="right">{row.runtime}</StyledTableCell>
                <StyledTableCell align="right">{row.revenue}</StyledTableCell>
                <StyledTableCell align="right">{row.rating}</StyledTableCell>
                <StyledTableCell align="right">{row.genre}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BoxContainer>
  );
};

export default Home;
