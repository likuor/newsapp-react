import { useEffect, useState } from 'react';
import { Category } from './Category';

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';

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

export const NewsList = (async) => {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;
  const [newsList, setNewsList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNews = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setNewsList([...data.articles]);
      });
  };

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList}>
        <ImageListItem key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader component='div'>
            <Category />
          </ListSubheader>
        </ImageListItem>
        {newsList.map((item, index) => (
          <ImageListItem key={index} style={{ height: '20vw' }}>
            <a href={item.url}>
              <img
                className={classes.img}
                src={item.urlToImage}
                alt={item.title}
              />

              <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.description}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    className={classes.icon}
                  >
                    <BookmarkIcon />
                  </IconButton>
                }
              />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
