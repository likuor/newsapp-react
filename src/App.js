import React, { useState, useEffect } from 'react';
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewsList } from './components/NewsList';
import Favorite from './components/Favorite';
import { NewsProvider } from './context/context';

export const ArticleContext = React.createContext();

function App() {
  // const initialState = {
  //   count: 100,
  // };

  // const reducer = (state, action) => {
  //   if (action === 'INCREMENT') {
  //     return { count: state.count + 1 };
  //   } else {
  //     return { count: state.count - 1 };
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const API_URL = `https://newsapi.org/v2/top-headlines`;
  const [newsList, setNewsList] = useState([]);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNews = (category = 'general') => {
    const params = {
      country: 'ca',
      category: category,
      apiKey: API_KEY,
    };

    const query_params = new URLSearchParams(params);
    fetch(`${API_URL}?${query_params}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsList([...data.articles]);
      });
  };

  const updateItems = (updatedItems) => {
    console.log(updateItems);
    setFavorites(updatedItems);
  };

  return (
    <div className='App'>
      {/* <ArticleContext.Provider value={{ state, dispatch }}> */}
      <NewsProvider>
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <NewsList
                newsList={newsList}
                updateItems={updateItems}
                getNews={getNews}
              />
            }
          />
          <Route
            path='/favorite'
            element={<Favorite favorties={favorites} />}
          />
        </Routes>
      </NewsProvider>
      {/* </ArticleContext.Provider> */}
    </div>
  );
}

export default App;
