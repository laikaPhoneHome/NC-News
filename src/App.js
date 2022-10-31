import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { TopicArticles } from './Components/Articles-Topic/TopicArticles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/articles/:topic' element={<TopicArticles />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
