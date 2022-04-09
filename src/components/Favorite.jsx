import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '80%',
  },
  img: {
    width: '100%',
  },
}));

function Favorite() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const { favorites } = user;

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList}>
        <ImageListItem key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader component='div'></ListSubheader>
        </ImageListItem>
        {favorites.map((item, index) => {
          return (
            <ImageListItem key={index} style={{ height: '20vw' }}>
              <a href={item.url}>
                <img
                  className={classes.img}
                  src={item.urlToImage}
                  alt={item.title}
                />
              </a>
              <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.description}</span>}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
}

export default Favorite;
