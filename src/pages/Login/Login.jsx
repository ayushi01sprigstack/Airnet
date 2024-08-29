import React, {  useContext, useEffect, useState } from "react";
import "../../styles/airnetdashboard.css";
import IMAGES from "../../utils/Images";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import LoginValidationSchemas from "../../utils/validations/LoginValidationSchemaS";
import AlertComp from "../../components/AlertComp";
import ShowLoader from "../../components/loader/ShowLoader";
import HideLoader from "../../components/loader/HideLoader";
import '../../styles/common.css'
import { AuthContext } from "../../context/AuthContext";
import Cookies from 'js-cookie';

export default function Login() {
  const navigate = useNavigate();
  const islogin = localStorage.getItem("isLogin");
  const [showAlerts, setShowAlerts] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser} = useContext(AuthContext);

  const handleLogin = (values) =>{
    console.log('Login Details:', values);
    setLoading(true);    
    /*
      We can also do this by storing values in local storage
      localStorage.setItem('user', JSON.stringify({username: values?.username , email: values?.email}))
      We can also do this by passing values in usecontext
      setUser({ username: values?.username, email: values?.email });
    */
   const userDetails = {
    username: values?.username,
    email: values?.email
   }
   Cookies.set('UserDetails', JSON.stringify(userDetails), { expires: 1 });
    localStorage.setItem('isLogin', 1);
    setTimeout(() => {
      setLoading(false);
      setShowAlerts(<AlertComp show={true} variant="success" message="User logged in successfully"/>)
      setTimeout(() => {
        setShowAlerts(<AlertComp show={false}/> );
        navigate('/dashboard');
      }, 1500); //Alert duration     
    }, 1500);  //Loader duration 
  }
   useEffect(()=>{
       if(islogin){
        navigate('/dashboard');
       }
   },[])
  return (
    <>
    {showAlerts}
    {loading? <ShowLoader/> : <HideLoader/>}
    <div className="airnetdashboard d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="chartWrapper p-5">
        <div className="d-flex align-items-center justify-content-center">
          <img src={IMAGES.airliveBlueLogo} alt="logo" />
          <h4 className="ms-2">Airnet</h4>
        </div>
        <div className="p-4">
            <Formik initialValues={{username:'', email:'', password:''}} validationSchema={LoginValidationSchemas} onSubmit={handleLogin}>
                {()=> (
                    <Form>
                        <div className="mb-4 position-relative">
                            <label className="pt-2 fs-6">Username:</label>
                            <Field type="text" className="form-control" name='username' autoComplete='off'/>
                            <ErrorMessage name='username' component="div" className="text-danger mt-1 errorText"/>
                        </div>
                        <div className="mb-4 position-relative">
                            <label className="pt-2 fs-6">Email:</label>
                            <Field type="email" className="form-control" name='email' autoComplete='off'/>
                            <ErrorMessage name='email' component="div" className="text-danger mt-1 errorText"/>
                        </div>
                        <div className="mb-4 position-relative">
                            <label className="pt-2 fs-6">Password:</label>
                            <Field type="password" className="form-control" name='password' autoComplete='off'/>
                            <ErrorMessage name='password' component="div" className="text-danger mt-1 errorText"/>
                        </div>
                        <div className='text-center pt-5'>
                            <button type="submit" className='border-0 rounded-3 py-2 px-3 btn btn-primary text-white'>Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
      </div>
    </div>
    </>
  );
}
