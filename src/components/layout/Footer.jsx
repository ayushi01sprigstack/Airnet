import React from 'react'
import IMAGES from '../../utils/Images';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className='row px-5 mt-auto airnetdashboard'>
      <div className="col-2 d-flex align-items-center">
        <img src={IMAGES.airnetLogo} alt="logo" />
        <h4 className='text-white ps-2 fs-4 fw-bold'>AirNet</h4>
      </div>
      <div className="col-8 d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link text-white cursor-pointer" aria-current="page" onClick={() => navigate("/dashboard")}>Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white cursor-pointer" aria-current="page" onClick={() => navigate("/feature")}>Feature</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white cursor-pointer" onClick={() => navigate("/blog")}>Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white cursor-pointer" onClick={() => navigate("/aboutus")}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white cursor-pointer" onClick={() => navigate("/contactus")}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-2 d-flex align-items-center" style={{ filter: "brightness(0) invert(1)" }} >
        <img src={IMAGES.facebook} alt="facebook" className='cursor-pointer mx-2' />
        <img src={IMAGES.instagram} alt="instagram" className='cursor-pointer mx-2' />
        <img src={IMAGES.linkedin} alt="linkedin" className='cursor-pointer mx-2' />
        <img src={IMAGES.youtube} alt="youtube" className='cursor-pointer mx-2' />
      </div>
      <hr className='mt-4 text-white'/>
      <ul className='list-unstyled d-flex justify-content-center text-white mt-1'>
        <li className='mx-2'>© 2023 AirNet All rights reserved.</li>
        <li className='cursor-pointer mx-2'>Privacy Policy</li>
        <li className='cursor-pointer mx-2'>Terms and Conditions</li>
        <li className='cursor-pointer mx-2'>Cookie Policy</li>
      </ul>
    </div>
  )
}
