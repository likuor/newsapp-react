import { useEffect, useState } from 'react';

export const ApiQuery = (async) => {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
  console.log(API_URL);
  const [newsList, setNewsList] = useState([]);

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
    <div>
      {newsList.map((item, index) => (
        <div key={index}>
          <a href={item.url}>
            <p>{item.title}</p>
            <img src={item.urlToImage} alt='urlToImage' />
          </a>
        </div>
      ))}
    </div>
  );
};
