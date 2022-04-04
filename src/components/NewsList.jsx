import React, { useState } from 'react';
import { Category } from './Category';

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export const ArticlesContext = React.createContext();

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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export const NewsList = (props) => {

  const [ favorites, setFavorites ] = useState([]);

  const classes = useStyles();

  const isChecked = (value) => {
    return favorites.some(x => x.id === value.id);
  };

  const addFavoriteArticle = (article) => {

    if (isChecked(article)) {
      const updated = favorites.filter(x => x.id !== article.id);
      setFavorites(updated);
      props.updateItems(updated);
    } else {
      const updated = [article, ...favorites]
      setFavorites(updated);
      props.updateItems(updated);
    }
  };

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList}>
        <ImageListItem key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader component='div'>
            <Category getNews={props.getNews} />
          </ListSubheader>
        </ImageListItem>
        {props.newsList.map((item, index) => {
          const checked = isChecked(item);
          return <ImageListItem key={index} style={{height: '20vw'}}>
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
                actionIcon={
                  <IconButton
                      aria-label={`info about ${item.title}`}
                      className={classes.icon}
                      onClick={() => addFavoriteArticle(item)}
                  >
                    <BookmarkIcon style={{color: `${checked ? "blue" : "unset"}`}}/>
                  </IconButton>
                }
            />
          </ImageListItem>
        })}
      </ImageList>
    </div>
  );
};
