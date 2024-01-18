import React, { useEffect, useState } from 'react';
import HomePage from './Pages/HomePage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useAuth } from './Contexts/CustomHooks';

const App = () => {
  const { isAuthenticated, setAuthenticated, userData, login, logout } = useAuth();

  useEffect(() => {
    const storedAuthStatus = sessionStorage.getItem('authenticated');
    if (storedAuthStatus && storedAuthStatus === 'true') {
      login();
    }
  }, []);
 
  useEffect(() => {
    if (!isAuthenticated) {
      sessionStorage.clear();
      console.log(userData)

    }
  }, [isAuthenticated]);

  return (
    <div>
      <Routes>
        <Route path='/' element={isAuthenticated ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/login' element={isAuthenticated ? <Navigate to='/' /> : <Login setAuthenticated={setAuthenticated} />} />
        <Route path='/signup' element={isAuthenticated ? <Navigate to='/' /> : <Signup />} />
        <Route path='/user/:id' element={isAuthenticated ? <HomePage /> :<Navigate to='/login' />} />
         <Route path='/post/:id' element={isAuthenticated ? <HomePage /> :<Navigate to='/login' />}/>
      </Routes>
    </div>
  );
};

export default App;
