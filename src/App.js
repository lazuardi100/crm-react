import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/login';
import Customers from './pages/customers';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/customers' element={<Customers />}/>
      </Routes>
    </div>
  );
}

export default App;
