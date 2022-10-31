import logo from './logo.svg';
import './App.css';
import { browserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <browserRouter>
        <Routes>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </browserRouter>
      
    </div>
  );
}

export default App;
