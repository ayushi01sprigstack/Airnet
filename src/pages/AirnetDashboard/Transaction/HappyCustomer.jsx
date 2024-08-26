import React from 'react'
import IMAGES from '../../../utils/Images'

export default function HappyCustomer() {
  return (
    <div className='chartWrapper p-3'>
        <img src={IMAGES.customers} alt="customers" style={{width:'30%'}}/>
      <h2 className='fs-2 fw-bold mt-3'>10,8 Milion+</h2>
      <span className='fs-6'>Happy Customers</span>
    </div>
  )
}
