const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.favorite],
      };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.url !== action.favorite.url
        ),
      };

    default:
      return state;
  }
};

export default reducer;
