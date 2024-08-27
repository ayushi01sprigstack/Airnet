import React, {  useEffect } from "react";
import "../../styles/airnetdashboard.css";
import IMAGES from "../../utils/Images";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik, Form } from "formik";
import validationSchemas from "../../utils/validationSchema";

export default function Login() {
  // const [loginDetails, setLoginDetails] = useState({
  //     username: '',
  //     password: '',
  //     email:''
  // })
  // const navigate = useNavigate();
  // const islogin = localStorage.getItem("isLogin");
  // useEffect(()=>{
  //     if(islogin){
  //         navigate('/dashboard');
  //     }
  // },[])
  // const handleLogin = () => {
  //     const logindata = {
  //         username: loginDetails?.username,
  //         password: loginDetails?.password
  //     }
  //     console.log(logindata);
  //     localStorage.setItem('isLogin', logindata)
  //     navigate('/dashboard');
  // }
  // return (
  //     <div className='airnetdashboard d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
  //         <div className='chartWrapper p-5'>
  //             <div className='d-flex align-items-center justify-content-center'>
  //                 <img src={IMAGES.airliveBlueLogo} alt="logo" />
  //                 <h4 className='ms-2'>Airnet</h4>
  //             </div>
  //             <div className='p-4'>
  //                 <label className='py-2 fs-6'>Username:</label>
  //                 <input type="text" className='form-control' onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })} />
  //                 <label className='py-2 fs-6 mt-3'>Email:</label>
  //                 <input type="email" className='form-control' onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />
  //                 <label className='py-2 fs-6 mt-3'>Password:</label>
  //                 <input type="password" className='form-control' onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
  //                 <div className='text-center pt-4'>
  //                     <button className='border-0 rounded-3 py-2 px-3 btn btn-primary text-white' onClick={handleLogin}>Login</button>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // )

  const navigate = useNavigate();
  const islogin = localStorage.getItem("isLogin");
  const handleLogin = (values) =>{
    console.log('Login Details:', values);
    localStorage.setItem('isLogin', 1);
    navigate('/dashboard');
  }
   useEffect(()=>{
       if(islogin){
        navigate('/dashboard');
       }
   },[])
  return (
    <div className="airnetdashboard d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="chartWrapper p-5">
        <div className="d-flex align-items-center justify-content-center">
          <img src={IMAGES.airliveBlueLogo} alt="logo" />
          <h4 className="ms-2">Airnet</h4>
        </div>
        <div className="p-4">
            <Formik initialValues={{username:'', email:'', password:''}} validationSchema={validationSchemas.login} onSubmit={handleLogin}>
                {()=> (
                    <Form>
                        <div className="mb-3">
                            <label className="py-2 fs-6">Username:</label>
                            <Field type="text" className="form-control" name='username' autoComplete='off'/>
                            <ErrorMessage name='username' component="div" className="text-danger mt-1"/>
                        </div>
                        <div className="mb-3">
                            <label className="py-2 fs-6">Email:</label>
                            <Field type="email" className="form-control" name='email' autoComplete='off'/>
                            <ErrorMessage name='email' component="div" className="text-danger mt-1"/>
                        </div>
                        <div className="mb-3">
                            <label className="py-2 fs-6">Password:</label>
                            <Field type="password" className="form-control" name='password' autoComplete='off'/>
                            <ErrorMessage name='password' component="div" className="text-danger mt-1"/>
                        </div>
                        <div className='text-center pt-4'>
                            <button type="submit" className='border-0 rounded-3 py-2 px-3 btn btn-primary text-white'>Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
      </div>
    </div>
  );
}
