import React, { useState } from 'react'
import IMAGES from '../../utils/Images';
import '../../styles/airnetdashboard.css'

export default function Blog() {
  const blogs = [
    {
      profile:IMAGES.profile1,
      name:'Guy Hawkins',
      position:'Software Enginner',
      quote:'“Everything should be made as simple as possible. But to do that you have to master complexity.” “Some people are good programmers because they can handle many more details than most people."'
    },
    {
      profile:IMAGES.profile2,
      name:'Jane Cooper',
      position:'UI/UX Designer',
      quote:'“Design isnt just what it looks like and feels like — design is how it works.”'
    },
    {
      profile:IMAGES.profile3,
      name:'Leland Dieno',
      position:'Web Developer',
      quote:'“Your website is the center of your digital ecosystem, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.”'
    }, 
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentBlog = blogs[currentIndex];
  
  const handlePreviousClick = () =>{
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1)
    }
  }
  const handleNextClick = () =>{
    if(currentIndex < blogs.length - 1){
      setCurrentIndex(currentIndex + 1)
    }
  }
 
  return (
    <div className='contentBackground p-2' style={{height:'70vh'}}>
      <h2 className='text-black text-center'>Blog</h2>
      <div className="row mt-3">
        <div className='col-md-4 offset-md-4 border border-secondary rounded-3 bg-dark p-3'>
          <div className='d-flex align-items-center'>
            <img src={currentBlog.profile} alt="profile1" style={{ height: "50px" }} />
            <div>
              <h6 className='text-white fs-6 ms-3'>{currentBlog.name}</h6>
              <span className='text-white ms-3 mb-2' style={{ fontSize: '13px' }}>{currentBlog.position}</span>
            </div>
          </div>
          <label className='text-white mt-3 p-2'>{currentBlog.quote}</label>
        </div>
        <div className='col-md-6 offset-md-3 mt-3 p-2 d-flex justify-content-around align-items-center'>
          <button className='p-2 btn btn-info animatedBtn' onClick={handlePreviousClick} disabled={currentIndex == 0}>Previous</button>
          <button className='py-2 px-3 btn btn-info animatedBtn' onClick={handleNextClick} disabled={currentIndex == blogs.length-1}>Next</button>
        </div>
      </div>
    </div>
  )
}