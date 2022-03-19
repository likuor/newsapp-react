import { Navbar } from './components/Navbar';
import { Category } from './components/Category';
import { ApiQuery } from './components/ApiQuery';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Category />
      <ApiQuery />

      <p>NewsApp</p>
    </div>
  );
}

export default App;
