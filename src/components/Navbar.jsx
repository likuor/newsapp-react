import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  title: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' className={classes.title}>
              News App
            </Link>
          </Typography>
          <Link to='favorite' className={classes.link}>
            <Button color='primary' variant='contained'>
              <BookmarkIcon />
              Favorite
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
