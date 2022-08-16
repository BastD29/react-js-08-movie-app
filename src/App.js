import { Routes, Route } from 'react-router-dom';
import './App.css';

import Details from './components/Details';
import Container from './components/Container';

import { MovieProvider } from './context/MovieContext';

function App() {
    
    return (
      <div className="App">
        <MovieProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Container />
                </>
              }
            />
            <Route path="/movie">
              <Route path=":movieId" element={<Details />} />
            </Route>
          </Routes>
        </MovieProvider>
      </div>
    );
}

export default App;
