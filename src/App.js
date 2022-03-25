import { Navbar } from './components/Navbar';
import { NewsList } from './components/NewsList';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <NewsList />
      <p>NewsApp</p>
    </div>
  );
}

export default App;
