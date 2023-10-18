import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Home from './page/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Edit from './page/Edit';
import View from './page/View';
// import ProtectedRoutes from './service/ProtectedRoutes';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Login' element={<Login/>} /> 
        <Route path='/' element={<Register/>} /> 
         <Route  path='/View' element={<View/>}/> 
         <Route  path='/Edit' element={<Edit/>}/>
        <Route path='/Home' element={<Home/>} /> 
         
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
