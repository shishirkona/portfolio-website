import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>15+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>100+ WorldWide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>500+ Completed</small>
          </article>
        </div>
        <p>I'm a straightforward person who grew up in Bangladesh's little town of Noakhali. I was an ordinary student who attended the local public schools from kindergarten through college. I enjoy learning new stuff constantly. </br>I work at a production studio that works with marketing and advertising firms from all over the world, where I can further my career.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
