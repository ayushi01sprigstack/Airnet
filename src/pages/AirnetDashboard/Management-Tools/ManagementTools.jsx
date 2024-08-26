import React from 'react'
import IMAGES from '../../../utils/Images'

export default function ManagementTools({ backgroundColor, chart, toolName, description }) {
    return (
        <div className='manageToolsWrapper p-3 h-100' style={{ backgroundColor: backgroundColor, borderRadius: '16px', boxShadow: '0px 1px 3px 0px #1018281A' }}>
            {chart}
            <div className='text-black'>
                <h4 className='fs-5 fw-bold'>{toolName}</h4>
                <p className='fs-6 fw-normal'>{description}</p>
                <button className='border-0 bg-transparent fw-bold'>Learn more <img src={IMAGES.learnMore} alt="icon" className='ps-2' /></button>
            </div>
        </div>
    )
}
