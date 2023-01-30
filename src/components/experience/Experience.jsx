import React, { useState } from 'react';
import './experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {MdWork as WorkIcon} from 'react-icons/md';
import {MdSchool as SchoolIcon} from 'react-icons/md';
import {MdStar as StarIcon} from 'react-icons/md';
import UTD from '../../assets/UTD.png'
import AWS from '../../assets/AWS.png'
import CPI from '../../assets/CPI.png'
import SS from '../../assets/SpiderSmart.png'
import CHS from '../../assets/Coppell.png'
import DisplayModal  from './item_detail';
import exp_data from './exp_data'
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {

    return (
        <section id="experience" className='experience' >
            <h5>What I have done so far...</h5>
            <h2>Experience</h2>
            <div className="container experience__container">
            <VerticalTimeline  lineColor ={"white"}>
                <VerticalTimelineElement
                    
                    className="vertical-timeline-element--education"
                    date="Aug 2022 - May 2024"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SchoolIcon />}

                >
                    <div className="experience__content">
                        <div className="experience__text">
                            <h5 className="vertical-timeline-element-title">Master's in Computer Science</h5>
                            <h6 className="vertical-timeline-element-subtitle">The University of Texas at Dallas</h6>
                        </div>
                        <div>
                         <img src={UTD}  className="experience__img"alt="" />
                        </div>
                        
                    </div>
                    <div className="modal_left">
                        <DisplayModal data = {exp_data[0]}/>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2022 - Aug 2022"
      
                    iconStyle={{ background: '#800000 ', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <div className="experience__content">
                        <div>
                         <img src={AWS}  className="experience__img"alt="" />
                        </div>
                        <div className="experience__text">
                            <h5 className="vertical-timeline-element-title">Software Development Engineer Intern</h5>
                            <h6 className="vertical-timeline-element-subtitle">Amazon Inc</h6>
                        </div>
                    </div>
                    <div className="modal_right">
                        <DisplayModal data = {exp_data[1]}/>
                    </div>
                    
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2018 - May 2022"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <div className="experience__content">
                        
                        <div className="experience__text">
                            <h5 className="vertical-timeline-element-title">Bachelor's in Computer Science</h5>
                            <h6 className="vertical-timeline-element-subtitle">The University of Texas at Dallas</h6>
                            
                        </div>
                        <div>
                         <img src={UTD}  className="experience__img"alt="" />
                        </div>
                    
                    </div>
                    <div className="modal_left">
                        <DisplayModal data = {exp_data[2]}/>
                    </div>
                </VerticalTimelineElement>
                
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2020 - Mar 2022"
      
                    iconStyle={{ background: '#800000', color: '#black' }}
                    icon={<WorkIcon />}
                >
                    <div className="experience__content">
                        <div>
                         <img src={CPI}  className="experience__img"alt="" />
                        </div>
                        <div className="experience__text">
                            <h5 className="vertical-timeline-element-title">Software Engineering Intern</h5>
                            <h6 className="vertical-timeline-element-subtitle">Communications and Power Ind.</h6>
                        </div>
                    </div>
                    <div className="modal_right">
                        <DisplayModal data = {exp_data[3]}/>
                    </div>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 2019 - Nov 2020"
      
                    iconStyle={{ background: '#800000', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <div className="experience__content">
                       
                        <div className="experience__text">
                            <h5 className="vertical-timeline-element-title">Tutor / Adminstrator</h5>
                            <h6 className="vertical-timeline-element-subtitle">Spider Smart</h6>
                        </div>
                        <div>
                         <img src={SS}  className="experience__img"alt="" />
                        </div>
                    </div>
                    <div className="modal_left">
                        <DisplayModal data = {exp_data[4]}/>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2014 - May 2018"
      
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <div className="experience__content">
                        <div>
                            <img src={CHS}  className="experience__img"alt="" />
                        </div>
 
                        <div className="experience__text">
                            <h5 className="vertical-timeline-element-title">High School Diploma</h5>
                            <h6 className="vertical-timeline-element-subtitle">Coppell High School</h6>
                            
                        </div>
                       
                    </div>
                    <div className="modal_right">
                        <DisplayModal data = {exp_data[5]}/>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
            </div>
        </section>
  
    )
  }
  
  export default Experience