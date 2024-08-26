import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import IMAGES from '../../utils/Images';
import { AuthContext } from '../../context/AuthContext';

export default function Header() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        navigate('/login');
    }

    return (
        <div className='airnetdashboard sticky-top'>
            <div className='row px-5 py-3'>
                <div className="col-md-2 d-flex align-items-center cursor-pointer" onClick={() => navigate('/')}>
                    <img src={IMAGES.airnetLogo} alt="logo" style={{ height: '30px' }} className='' />
                    <h3 className='text-white ps-2 fs-4 fw-bold'>AirNet</h3>
                </div>
                <div className="col-md-8 d-flex justify-content-center">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link text-white cursor-pointer" aria-current="page" onClick={() => navigate('/feature')}>Feature</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white cursor-pointer" onClick={() => navigate('/blog')}>Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white cursor-pointer" onClick={() => navigate('/aboutus')}>About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white cursor-pointer" onClick={() => navigate('/contactus')}>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-2 text-end">
                    <button className='getStarted' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}
