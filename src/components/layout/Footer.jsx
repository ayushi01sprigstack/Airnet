import React from 'react'
import IMAGES from '../../utils/Images';

export default function Footer() {
  return (
    <div className='row px-5 mt-auto'>
      <div className="col-2 d-flex align-items-center">
        <img src={IMAGES.airliveBlueLogo} alt="logo" />
        <h4 className='text-black ps-2 fs-4 fw-bold'>AirNet</h4>
      </div>
      <div className="col-8 d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-black" aria-current="page" href="/feature">Feature</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-2 d-flex align-items-center">
        <img src={IMAGES.facebook} alt="facebook" className='cursor-pointer mx-2' />
        <img src={IMAGES.instagram} alt="instagram" className='cursor-pointer mx-2' />
        <img src={IMAGES.linkedin} alt="linkedin" className='cursor-pointer mx-2' />
        <img src={IMAGES.youtube} alt="youtube" className='cursor-pointer mx-2' />
      </div>
      <hr className='mt-4'/>
      <ul className='list-unstyled d-flex justify-content-center mt-1'>
        <li className='cursor-pointer mx-2'>© 2023 AirNet All rights reserved.</li>
        <li className='cursor-pointer mx-2'>Privacy Policy</li>
        <li className='cursor-pointer mx-2'>Terms and Conditions</li>
        <li className='cursor-pointer mx-2'>Cookie Policy</li>
      </ul>
    </div>
  )
}
