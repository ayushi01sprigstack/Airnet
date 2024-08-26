import React, { useState } from 'react'

export default function ContactUs() {
  const [currentInput, setCurrentInput] = useState(1);
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const handlePreviousClick = () => {
    if (currentInput > 1) {
      setCurrentInput(currentInput - 1)
    }
  }
  const handleNextClick = () => {
    if (currentInput < 4) {
      setCurrentInput(currentInput + 1)
    }
  }
  const handleSubmit = () =>{
    var contactdetails ={
      name : details?.name,
      email: details?.email,
      phone: details?.phone,
      message: details?.message
    }
    console.log(contactdetails);
  }
  return (
    <div>
      <h1 className='text-center text-black my-3'>Contact</h1>
      <div className='col-md-4 offset-md-4'>
        {currentInput == 1 &&
          <>
            <label>Name:</label>
            <input type="text" className='form-control' onChange={(e) => setDetails({ ...details, name: e.target.value })} />
          </>
        }
        {currentInput == 2 &&
          <>
            <label className='mt-3'>Email:</label>
            <input type="email" className='form-control' onChange={(e) => setDetails({ ...details, email: e.target.value })} />
          </>
        }
        {currentInput == 3 &&
          <>
            <label className='mt-3'>Phone:</label>
            <input type="number" className='form-control' onChange={(e) => setDetails({ ...details, phone: e.target.value })} />
          </>
        }
        {currentInput == 4 &&
          <>
            <label className='mt-3'>Message:</label>
            <textarea name="" id="" className='form-control' onChange={(e) => setDetails({ ...details, message: e.target.value })}></textarea>
          </>
        }
      </div>

      <div className='col-md-6 offset-md-3 mt-3 p-2 d-flex justify-content-around align-items-center'>
        <button className='rounded-3 border-0 p-2 btn btn-info text-white' onClick={handlePreviousClick} disabled={currentInput == 1}>Previous</button>
        <button className='rounded-3 border-0 py-2 px-3 btn btn-info text-white' onClick={handleNextClick} disabled={currentInput == 4}>Next</button>
      </div>
      {currentInput == 4 &&
        <div className='text-center mt-2'>
          <button className='border-0 rounded-3 py-2 px-3 btn btn-success text-white' onClick={handleSubmit}>Submit</button>
        </div>
      }
    </div>
  )
}
