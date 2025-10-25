import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Navbar.tsx';
import Home from './components/Pages/Home.tsx';
import LeaderBoard from './components/Pages/LeaderBoard.tsx';
import MySubmissions from './components/Pages/MySubmissions.tsx';
import Compiler from './components/Pages/Compiler.tsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/compiler' element={<Compiler/>}/>
      <Route path='/leaderboard' element={<LeaderBoard/>}/>
      <Route path='/mysubmissions' element={<MySubmissions/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
