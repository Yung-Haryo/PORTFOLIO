import React from 'react'
import "./About.css"
import theme_pattern from '../../assets/theme_pattern.svg'
import pics_1 from '../../assets/pics_1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
    <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" className='uyy'/>
    </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={pics_1} alt=""  className='uyu'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a young averagely experienced Frontend Developer.I have had the priviledge of colaborating with prestigious organizaton,contributing to their sucess and growth. </p>
                <p>My passion for frontend development is the enthusiasm and dedication I bring to each Project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Tailwind Css</p><hr style={{width:"54%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6+</h1>
            <p>MONTHS OF EXPERIENCE.</p>
        </div>
        <hr />
          <div className="about-achievement">
            <h1>9+</h1>
            <p>PROJECTS COMPLETED.</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>6.5%</h1>
            <p>Tutor's Ratings.</p>
        </div>
      </div>
    </div>
  )
}

export default About
