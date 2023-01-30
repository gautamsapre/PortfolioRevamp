import React from 'react';
import UTD from '../../assets/UTD.png'
import AWS from '../../assets/AWS.png'
import CPI from '../../assets/CPI.png'
import SS from '../../assets/SpiderSmart.png'
import CHS from '../../assets/Coppell.png'
import './exp_details.css'
const exp_data = [
    {
      id: 0,
      image: UTD,
      title: "Master's in Computer Science",
      subtitle: "University of Texas at Dallas",
      date: "Graduating - May 2024",
      description:<> 
        <h6>Focus:  Data Science</h6> 
        <h6>Courses Taken</h6>
        <ul className='list_modal'>
            <li>
                Machine Learning
            </li>

            <li>
                Statistical Methods in Data Science
            </li>
            <li>
                Design and Analysis of Computing Algorithms
            </li>
            <li>
                Database Design
            </li>
            <li>
                Virtual Reality
            </li>
            <li>
                Computer Animation and Gaming
            </li>
            
        </ul>
        </>
  
    },
    {
        id: 1,
        image: AWS,
        title: "Software Development Engineer Intern",
        subtitle: "Amazon Inc",
        date: "May 2022 - Aug 2022",
        description:<> 
        <ul className='list_modal'>
            <li>
            Designed and implemented a new software feature for an extensive, distributed software application in a collaborative cross-team agile environment.
            </li>

            <li>
            Established a correct solution for a broadly defined problem, while ensuring performance, scalability, and usability.
            </li>
            <li>
            Exceeded predefined goals by 25% by achieving out-of-scope use cases through research and utilization of external resources.
            </li>
            <li>

            <br />
            Skills: Amazon Web Services (AWS) · Technical Design · Database Design · React.js · TypeScript
            </li>
            
        </ul>
        </>
    
      },
      {
        id: 2,
        image: UTD,
        title: "Bachelors's in Computer Science",
        subtitle: "University of Texas at Dallas",
        date: "Graduated - May 2022",
        description:<> 
          <h6>Major Courses Taken</h6>
          <ul className='list_modal'>
              <li>
                  Deep Learning
              </li>
  
              <li>
                  Object Oriented Design
              </li>
              <li>
                  Computer Networks and Security
              </li>
              <li>
                  Operating Systems
              </li>
              <li>
                  Data Structures and Algorithms
              </li>
              <li>
                  Computer Architectures
              </li>
              
          </ul>
          <p>At UTD I was involed in many organizations such as the Association of Computing Machinary, HackUTD, and Artificial Intelligance Socienty. I worked as a Industry team lead in HackUTD and had the responsibility of finding 
            sponsors for the largest Hackathon in Texas. With this responsibility I also had to manage a team of Industry Coordinators to achieve this goal. 
          </p>
          </>
        
      },
      {
        id: 3,
        image: CPI,
        title: "Software Engineering Intern",
        subtitle: "Communications and Power Ind.",
        date: "Nov 2020 - Mar 2022",
        description:<> 
        <ul className='list_modal'>
            <li>
            Assisted in a data migration project which included working with Azure DevOps and IBM RTC.
            </li>

            <li>
            Created Pipelines and Deployments in Azure for CPI’s product line, e.g. Netmac which is an Antenna Control System.
            </li>
            <li>
            Explored Automated Testing solution for CPI’s software products and worked with Test Complete
            </li>
            <li>

            <br />
            Skills: TestComplete · Automated Software Testing · C (Programming Language) · Azure Devops 
            </li>
            
        </ul>
        </>
    
      },
      {
        id: 4,
        image: SS,
        title: "Tutor / Adminstrator",
        subtitle: "Spider Smart",
        date: "Sept 2019 - Nov 2020",
        description:<> 
        <ul className='list_modal'>
            <li>
            Working in an administrative position, responsible for making changes for the betterment of the business.
            </li>

            <li>
            Implementing a systematic process to track student progress in a more efficient way.
            </li>
            <li>
            Aided high school students with SAT Math. 
            </li>

            
        </ul>
        </>
    
      },
      {
        id: 5,
        image: CHS,
        title: "High School Diploma",
        subtitle: "Coppell High School",
        date: "Graduated - May 2018",
        description:<> 
          <p>
            
          </p>
          </>
        
      }
]
export default exp_data