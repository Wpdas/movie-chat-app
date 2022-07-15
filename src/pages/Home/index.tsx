import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BoxContainer, StyledTableCell, StyledTableRow } from './styles';

function createData(
  title: string,
  year: number,
  runtime: string,
  revenue: string,
  rating: string,
  genre: string[],
) {
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
}

const rows = [
  createData('Sing', 2016, '1h 48m', '270.32', '7.2', [
    'Animation',
    'Comedy',
    'Family',
  ]),
  createData('Sing', 2016, '1h 48m', '270.32', '7.2', [
    'Animation',
    'Comedy',
    'Family',
  ]),
  createData('Sing', 2016, '1h 48m', '270.32', '7.2', [
    'Animation',
    'Comedy',
    'Family',
  ]),
];

const Home: React.FC = () => {
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
            {rows.map(row => (
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
