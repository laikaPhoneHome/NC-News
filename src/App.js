import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { TopicsLanding } from './Components/Articles-Topic/TopicsLanding'
import { ArticleLandling } from './Components/Landing/ArticleLanding';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
=======
          <Route path='/article/:article_id' element={<ArticleLandling/>}/>
>>>>>>> 707c35c88e559d2bfbb8624a466ec412207dd839
          <Route path='/articles/:topic' element={<TopicsLanding />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
