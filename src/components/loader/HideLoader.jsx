import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function HideLoader() {
  return (
    <div className='d-none'>
       <Spinner animation="border" />
    </div>
  )
}
