import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className='p-3 text-center'>
    <h3>Oops! Sorry the page you are trying to visit does not exist. You can go back to home from button given below. </h3>
    <button className='border-0 p-2 rounded-2 btn btn-info' onClick={()=>navigate('/dashboard')}>Home</button>
    </div>
  )
}
