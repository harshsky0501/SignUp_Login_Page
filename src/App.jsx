import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
