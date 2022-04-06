import React, { useState, useEffect } from 'react';
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewsList } from './components/NewsList';
import Favorite from './components/Favorite';
import { NewsProvider } from './context/context';

function App() {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const API_URL = `https://newsapi.org/v2/top-headlines`;
  const [newsList, setNewsList] = useState([]);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getNews();
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
        const dataWithId = data.articles.map((x, index) => {
          x.id = index;
          return x;
        });
        setNewsList(dataWithId);
      });
  };

  const updateItems = (favorites) => {
    setFavorites(favorites);
  };

  return (
    <div className='App'>
      <NewsProvider>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <NewsList
                newsList={newsList}
                updateItems={updateItems}
                getNews={getNews}
                favorites={favorites}
              />
            }
          />
          <Route
            path='/favorite'
            element={<Favorite favorites={favorites} />}
          />
        </Routes>
      </NewsProvider>
    </div>
  );
}

export default App;
