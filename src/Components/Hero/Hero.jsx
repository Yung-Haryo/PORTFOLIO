import React from 'react'
import './Hero.css'
import pics_1 from '../../assets/pics_1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pics_1} alt="" />
      <h1> <span className='cdc'>I'm Qasim-Yusuf Hasan,</span> frontend developer based in NIGERIA.</h1>
      <p>I am a frontend development student from Nigeria, with 6 month of experience in a learning site named <a href="https://www.hub.dervac.com/" className='asa'><span className='der'>dervac</span><span className='hub'>Hub</span></a>.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}> Connect with Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero;
