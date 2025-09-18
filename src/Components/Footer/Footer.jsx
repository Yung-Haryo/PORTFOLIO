import React from 'react'
import'./Footer.css'
import pics_2 from '../../assets/pics_2.jpg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={pics_2} alt="" />
            <p>I am a frontend development student from, Nigeria with 6 months of experience at a learning site named <a href="https://www.hub.dervac.com/" className='asa'><span className='der'>dervac</span><span className='hub'>Hub</span></a>.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Insert your email' className='eere'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2023 Alex Bennett. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
