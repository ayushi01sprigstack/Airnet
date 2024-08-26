import React, { useContext, useState } from 'react'
import '../../styles/airnetdashboard.css'
import IMAGES from '../../utils/Images'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();
    const handleLogin = () => {
        const logindata = {
            username: loginDetails?.username,
            password: loginDetails?.password
        }
        console.log(logindata);
        localStorage.setItem('isLogin', 1)
        navigate('/dashboard');
    }
    return (
        <div className='airnetdashboard d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className='chartWrapper p-5'>
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={IMAGES.airliveBlueLogo} alt="logo" />
                    <h4 className='ms-2'>Airnet</h4>
                </div>
                <div className='p-4'>
                    <label className='py-2 fs-6'>Username:</label>
                    <input type="text" className='form-control' onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })} />
                    <label className='py-2 fs-6 mt-3'>Password:</label>
                    <input type="password" className='form-control' onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
                    <div className='text-center pt-4'>
                        <button className='border-0 rounded-3 py-2 px-3 btn btn-primary text-white' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
