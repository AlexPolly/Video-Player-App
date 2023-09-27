import { Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>} />
    </Routes> 
    </div>
  );
}

export default App;
