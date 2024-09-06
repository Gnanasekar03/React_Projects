import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import sandy_img from '../../assets/sandy_img.jpg';

const Hero = () => {
  return (
    <div id='Home' className='Hero'>
        <img src={sandy_img} alt="" />
        <h1><span>Hi, I'm Gnanasekar</span> Front-end Developer..!</h1>
        <p>I'm a Front-End Developer skilled in HTML, CSS, and JavaScript, with a focus on creating responsive and user-friendly web applications. I love turning ideas into interactive and visually appealing websites.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
