import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IMAGES from "../../utils/Images";
import AlertComp from "../AlertComp";
import '../../styles/header.css'
import ShowLoader from "../loader/ShowLoader";
import HideLoader from "../loader/HideLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import Cookies from 'js-cookie';

export default function Header() {
  const navigate = useNavigate();
  const [showAlerts, setShowAlerts] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useContext(AuthContext);
  const userCookie = Cookies.get('UserDetails');
  const userDetails = JSON.parse(userCookie);
  /* We can also get user values from local storage 
  const user = JSON.parse(localStorage.getItem('user'));
  */
  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("isLogin");
    Cookies.remove('UserDetails');
    setTimeout(() => {
      setLoading(false);
      setShowAlerts(<AlertComp show={true} variant="success" message="User logged out successfully" />);
      setTimeout(() => {
        setShowAlerts(<AlertComp show={false} />)
        navigate("/login");
      }, 1500);
    }, 1500);
  };

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  }

  return (
    <>
      {showAlerts}
      {loading ? <ShowLoader /> : <HideLoader />}
      <div className="airnetdashboard sticky-top">
        <div className="row px-5 py-3">
          <div
            className="col-md-2 d-flex align-items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={IMAGES.airnetLogo}
              alt="logo"
              style={{ height: "30px" }}
              className=""
            />
            <h3 className="text-white ps-2 fs-4 fw-bold">AirNet</h3>
          </div>
          <div className="col-md-8 d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg custom-navbar">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/feature"
                        className={({ isActive }) => isActive ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
                      >
                        Feature
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/blog"
                        className={({ isActive }) => isActive ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/aboutus"
                        className={({ isActive }) => isActive ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contactus"
                        className={({ isActive }) => isActive ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-2 text-end position-relative">
            <button className="profileOpen" onClick={toggleProfile}>
              {userDetails?.username.charAt(0).toUpperCase()}
            </button>
            {openProfile &&
              <div className="chartWrapper px-3 py-2 text-start mt-1 position-absolute end-0">
                <div className="d-flex align-items-center">
                  <div className="profileOpen">
                    {userDetails?.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="mb-0 ms-1 fs-5">{userDetails?.username}</p>
                    <p className="mb-0 ms-1 text-secondary" style={{fontSize:'15px'}}>{userDetails?.email}</p>
                  </div>
                </div>
                <hr className="mb-2 mt-2"/>
                <ul className="list-group custom-list-group">
                  <li className="list-group-item cursor-pointer d-flex align-items-center" onClick={() => navigate('/dashboard')}><FontAwesomeIcon icon={faGauge} className="me-2" />Dashboard</li>
                  <li className="list-group-item cursor-pointer d-flex align-items-center" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} className="me-2" />Logout</li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
