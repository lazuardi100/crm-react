import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/login';
import Customers from './pages/customers';
import Tambah from './pages/tambah';
import Ubah from './pages/ubah';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/customers' element={<Customers />}/>
        <Route path='/tambah' element={<Tambah />}/>
        <Route path='/ubah/:id' element={<Ubah />}/>
      </Routes>
    </div>
  );
}

export default App;
