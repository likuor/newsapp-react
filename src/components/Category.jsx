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

export const Category = (props) => {
  const classes = useStyles();

  function handleClick(event) {
    props.getNews(event);
  }

  return (
    <div>
      <Breadcrumbs aria-label='breadcrumb'>
        {CategoryList.map((category, index) => (
          <div className={classes.root} key={index}>
            <Button
              variant='outlined'
              color='primary'
              onClick={() => handleClick(category.category)}
            >
              {category.category}
            </Button>
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};
