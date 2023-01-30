import React from 'react'
import './projects.css'
import carpool from '../../assets/Carpool.png' 
import iaq from '../../assets/iaq.png'
import travel_secure from '../../assets/travel_secure.png'
import DisplayModal from './details'

const data = [
  {
    id: 0,
    image: carpool,
    title: 'Carpool',
    description: "Created an android application that lets users match with people to carpool with who have similar commutes\n Implemented a chat application that lets the users talk to people matched with. Utilized the Firebase database to store users’ data. Technologies used: Java (Android Studio), Google Autocomplete API and Firebase",
    existingLink: true,
    link: 'https://devpost.com/software/carpool-xqgapf'

  },
  {
    id: 1,
    image: iaq,
    title: 'Intelligent Air Quality',
    description: "Enhanced an occupancy estimator using data regarding air quality of a closed room. Led the front-end team to create a dynamic website to depict data produced by the machine learning models. Utilized the Django web framework in Python to display data and model estimations in an organized and eye-appealing fashion. Technologies Used: Django, Python, and ReactJS.",
    existingLink: false,
    link: 'NA'

  },
  {
    id: 2,
    image: carpool,
    title: 'Carpool',
    description: "Implemented a Travel Insurance algorithm that dealt with Cryptocurrency transaction. Incorporated Hedera Hashgraph API, and Metamask software, and learned more about blockchain technologies.",
    existingLink: true,
    link: 'https://devpost.com/software/travelsecure'

  }
]


const Projects = () => {
  return (
    <section id="projects" className='pro'>
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <article className="project__item">
          <div className="project_image">
            <img src={carpool} alt="Carpool Project Image" />
          </div>
          <h3>Carpool</h3>
          <div className='project_cta'>
            <DisplayModal  data={data[0]}/>
          </div>
        </article>

        <article className="project__item">
          <div className="project_image">
            <img src={iaq} alt="Carpool Project Image" />
          </div>
          <h3>Intelligent Air Quality</h3>
          <h6>Murata Manufacturing Co.</h6>
          <div className='project_cta'>
            <DisplayModal data={data[1]}/>
          </div>
        </article>

        <article className="project__item">
          <div className="project_image">
            <img src={travel_secure} alt="Carpool Project Image" />
          </div>
          <h3>TravelSecure</h3>
          <div className='project_cta'>
            <DisplayModal data={data[2]}/>
          </div>
        </article>

        
      </div>
    </section>

  )
}

export default Projects