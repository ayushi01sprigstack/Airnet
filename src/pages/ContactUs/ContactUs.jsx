import React from 'react'
import ContactValidationSchemas from '../../utils/validations/ContactValidationSchemas';
import { ErrorMessage, Formik, Form, Field } from 'formik';

export default function ContactUs() {
  const handleSubmit = (values) => {
    console.log('Contact details', values);
  }
  return (
    <div className='contentBackground'>
      <h2 className='text-black text-center mb-0 mt-2'>Contact</h2>
      <div className='d-flex align-items-center justify-content-center p-3 pb-5'>
      <div className="chartWrapper p-5" style={{background:'#f2f2f2', border:'2px solid #c39898'}}>
        <div className='p-4'>
          <Formik initialValues={{ firstName: '', email: '', phone: '', message: '' }} validationSchema={ContactValidationSchemas} onSubmit={handleSubmit}>
            <Form>
              <div className='mb-4 position-relative'>
                <label className="pt-2 fs-6 text-primary">First Name:</label>
                <Field type="text" className="form-control" name='firstName' autoComplete='off' />
                <ErrorMessage name='firstName' component="div" className='text-danger mt-1 errorText' />
              </div>
              <div className='mb-4 position-relative'>
                <label className="pt-2 fs-6 text-primary">Email:</label>
                <Field type="email" className="form-control" name='email' autoComplete='off' />
                <ErrorMessage name='email' component="div" className='text-danger mt-1 errorText' />
              </div>
              <div className='mb-4 position-relative'>
                <label className="pt-2 fs-6 text-primary">Phone:</label>
                <Field type="text" className="form-control" name='phone' autoComplete='off' />
                <ErrorMessage name='phone' component="div" className='text-danger mt-1 errorText' />
              </div>
              <div className='mb-4 position-relative'>
                <label className="pt-2 fs-6 text-primary">Message:</label>
                <Field type="text" className="form-control" name='message' autoComplete='off' />
                <ErrorMessage name='message' component="div" className='text-danger mt-1' />
              </div>
              <div className='text-center pt-3'>
                <button type="submit" className='border-0 rounded-3 py-2 px-3 text-white animatedBtn'>Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      </div>
    </div>
  )
}
