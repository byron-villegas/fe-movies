import './App.css';

import { Home, Movie } from './modules';

function App() {
  return (
    <div>
      <Home.Navbar />
      <div className="py-5">
        <div className="container">
          <Movie.List />
        </div>
      </div>
    </div>
  );
}

export default App;
