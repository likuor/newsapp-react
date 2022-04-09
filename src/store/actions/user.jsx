export const addFavorite = ({ favorite }) => {
  console.log(favorite);
  return {
    type: 'ADD_FAVORITE',
    favorite,
  };
};

export const deleteFavorite = ({ favorite }) => {
  return {
    type: 'DELETE_FAVORITE',
    favorite,
  };
};
