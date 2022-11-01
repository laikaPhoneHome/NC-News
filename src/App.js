import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { TopicsLanding } from './Components/Articles-Topic/TopicsLanding'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/articles/:topic' element={<TopicsLanding />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
