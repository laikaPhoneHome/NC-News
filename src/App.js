import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
<<<<<<< HEAD
import { TopicArticles } from './Components/Articles-Topic/TopicArticles';
=======
import { TopicsLanding } from './Components/Articles-Topic/TopicsLanding'

>>>>>>> 7c1b23215db433fd12f53945f148afdbb87df3d7

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/home' element={<Home />}/>
          <Route path='/articles/:topic' element={<TopicArticles />}/>
=======
          <Route path='/articles/:topic' element={<TopicsLanding />}/>
          <Route path='/' element={<Home />}/>
>>>>>>> 7c1b23215db433fd12f53945f148afdbb87df3d7
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
