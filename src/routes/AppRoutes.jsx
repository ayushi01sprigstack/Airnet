import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AirnetDashboard from '../pages/AirnetDashboard'
import Feature from '../pages/Feature/Feature'
import Blog from '../pages/Blog/Blog'
import AboutUs from '../pages/AboutUs/AboutUs'
import ContactUs from '../pages/ContactUs/ContactUs'
import PageNotFound from '../pages/404-ErrorPage/PageNotFound'
import Login from '../pages/Login/Login'
import PrivateRoutes from './PrivateRoutes'
import Layout from '../components/layout/Layout'

export default function AppRoutes() {
    console.log("approutes");
    
    return (
        <Router>
            <Routes>               
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
                <Route element={<PrivateRoutes />}>
                    <Route element={<Layout />}>
                        <Route path='/dashboard' element={<AirnetDashboard />} />
                        <Route path='/feature' element={<Feature />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/aboutus' element={<AboutUs />} />
                        <Route path='/contactus' element={<ContactUs />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}
