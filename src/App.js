import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewsList } from './components/NewsList';
import Favorite from './components/Favorite';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route index element={<NewsList />} />
        <Route path='/favorite' element={<Favorite test='test' />} />
      </Routes>
    </div>
  );
}

export default App;
