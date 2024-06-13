import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from '../pages/auth/register/Register';
import Landing from '../pages/landing/Landing';
import Login from '../pages/auth/login/Login';

const routes :  React.FC = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" Component={Landing}/>
        <Route path="/Register" Component={Register}/>
        <Route path="/Login" Component={Login}/>

        </Routes>
    </Router>
  )
}

export default routes