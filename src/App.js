import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { TopicsLanding } from './Components/Articles-Topic/TopicsLanding'
import { ArticleLandling } from './Components/Landing/ArticleLanding';
import { Login } from './Components/Landing/Login';
import { UserContext } from './Context/UserContext';


function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>

      <UserContext.Provider value={ {user, setUser} }>

        <Routes>
          <Route path='/article/:article_id' element={<ArticleLandling/>}/>
          <Route path='/articles/:topic' element={<TopicsLanding />}/>
          <Route path='/articles' element={<Home />}/>
          <Route path='/' element={<Login />}/>
        </Routes>
      
      </UserContext.Provider>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
