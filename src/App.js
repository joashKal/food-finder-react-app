
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Discover from './components/Discover';
import Favorites from './components/Favorites';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Discover/>}/>
          <Route path="/favorites" exact element={<Favorites/>}/>
          <Route path="/reservations" exact element={<Reservation/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>
        </Routes>  
    </div>
  );
}

export default App;
