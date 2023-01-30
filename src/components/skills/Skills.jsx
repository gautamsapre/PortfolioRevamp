import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills" className='skills'>
      
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="exp__frontend">
          <h3>Development</h3>
          <div className="skills__content">
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>JAVA</h4>
                </div>
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>Python</h4>
                </div>
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                 <h4>C++</h4>
                </div>
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>Javascript</h4>
                </div>       
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>ReactJS</h4>
                </div>    
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>HTML</h4>
                </div> 
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>SQL</h4>
                </div>
            </article>

          </div>
        </div>


        <div className="exp__tools">
          <h3>Tools/Technologies</h3>
          <div className="skills__content">
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>Git</h4>
                </div>
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>Command Line</h4>
                </div>
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>Linux</h4>
                </div>  
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>Cloud Development</h4>
                </div>
            </article>
            <article className="exp__details">
                <BsPatchCheckFill className='exp__details-icon'  />
                <div>
                  <h4>Firebase</h4>
                </div>     
            </article>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Skills