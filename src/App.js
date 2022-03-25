import { Navbar } from './components/Navbar';
import { ApiQuery } from './components/NewsList';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ApiQuery />

      <p>NewsApp</p>
    </div>
  );
}

export default App;
