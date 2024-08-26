import React from 'react'
import IMAGES from '../../../utils/Images'

export default function NewClients() {
    return (
        <div className='chartWrapper p-3'>
            <div className="row">
                <div className="col-md-5">
                    <div className="clientWrapper p-3">
                        <h6>New Clients</h6>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='fs-5 fw-bold'>65</span>
                            <span style={{ color: '#05DFAD' }}>+18.7%</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="clientWrapper p-3">
                        <h6>Invoices</h6>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='fs-5 fw-bold'>65</span>
                            <span style={{ color: '#007BFF' }}>+2.7%</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 text-end">
                    <img src={IMAGES.blueArrow} alt="blue-arrow" />
                </div>
            </div>
            <div className='mt-3'>
                <h6 className='fw-normal' style={{fontSize:'14px'}}>Recent emails</h6>
            </div>
            <div className="row">
                <div className="col-md-3 col-6">
                    <img src={IMAGES.profile} alt="profile" style={{height:'20px'}}/>
                </div>
                <div className="col-md-3 col-6">
                <span className='text-muted activity'>Robert Fox</span>
                </div>
                <div className="col-md-3 col-6">
                <span className='text-muted activity'>Meeting Scheduled</span>
                </div>
                <div className="col-md-3 col-6">
                <span className='text-muted activity'>1.23PM</span>
                </div>
            </div>
        </div>
    )
}
