import React from 'react'
import IMAGES from '../../../utils/Images'

const TeamLogos = [
   IMAGES.volume,
   IMAGES.vertigo,
   IMAGES.penta,
   IMAGES.sitemark,
   IMAGES.ebooks,
]
export default function ProductTeams() {

    return (
        <>
            <div className='text-black text-center pt-5 pb-4 contentBackground'>
                <h2 className='fs-2'>Loved by the world's best <br /> product teams</h2>
                <h6 className='fw-normal fs-6 p-2'>Discover our useful resources and read articles on different categories</h6>
            </div>
            <div className='sliderWrapper contentBackground'>
                <div className='slider'>
                    {TeamLogos.map((logo, index) => (
                        <div className='slide' key={index}>
                            <img src={logo} alt={`Logo${index}`} />
                        </div>
                    ))}
                    {TeamLogos.map((logo, index) => (
                        <div className='slide' key={index}>
                            <img src={logo} alt={`Logo${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
