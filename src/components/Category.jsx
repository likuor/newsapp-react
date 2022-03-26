import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { CategoryList } from '../CategoryList';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Category = () => {
  const classes = useStyles();

  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        {CategoryList.map((category, index) => (
          <div className={classes.root} key={index}>
            <Button variant='outlined' color='primary' href='#outlined-buttons'>
              {category.category}
            </Button>
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};
