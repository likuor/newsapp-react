import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewsList } from './components/NewsList';
import Favorite from './components/Favorite';
import { NewsProvider } from './context/context';
import axios from 'axios';

function App() {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const API_URL = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${API_KEY}`;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(API_URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='App'>
      <NewsProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<NewsList articles={articles} />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </NewsProvider>
    </div>
  );
}

export default App;
