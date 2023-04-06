import React from 'react'
import aboutPicture from '../../assets/images/about-img.webp'
import "./AboutMe.css"

const AboutImg = () => {
  return (
    <div className="about-img-container">
    <img src={aboutPicture} alt="About Picture" className="about-img"/>
</div>

  )
}

export default AboutImg