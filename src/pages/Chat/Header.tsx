import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const history = useHistory();

  const onClickBack = () => {
    history.push('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClickBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {title} Comments
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
