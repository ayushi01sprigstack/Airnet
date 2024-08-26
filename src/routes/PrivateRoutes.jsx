import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Redirector from './Redirector';
import Login from '../pages/Login/Login';

export default function PrivateRoutes() {
    const isAuthenticated  = localStorage.getItem('isLogin');
   
    return isAuthenticated == 1 ? <Outlet /> : <Login/>;
}
