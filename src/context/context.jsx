import { createContext, useState, useContext } from 'react';

const NewsContext = createContext();

export function useNewsContext() {
  return useContext(NewsContext);
}

export function NewsProvider({ children }) {
  const [count, setCount] = useState(100);

  const value = {
    count,
    setCount,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
