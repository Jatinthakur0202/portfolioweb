import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css" 
import { FaReact, FaPython } from 'react-icons/fa';
import Box from '@material-ui/core/Box';
import { DiJsBadge, DiBootstrap, DiGithubBadge, DiMongodb, DiNodejsSmall }from "react-icons/di";
import { SiTensorflow, SiCplusplus } from 'react-icons/si';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
      
    
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2020-2024'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Nitte Meenakshi Institute of Technology, Vishweshwaraya Technological University, Bangalore, India
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor of Engineering</h4>
          <p>Information Science</p>
          <p className='vertical-timeline-element-subtitle'>Current CGPA: 8.49/10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='October 2021 - 2022'
        
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Freelancer 
          </h3>
          <ul>
            <li>Built Websites and projects</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2023-Present'
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            shopperr.ai 
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
          SDE frontend Intern Bengaluru, Karnataka, India</h4>
          <p>
• Designed, built and incorporated code to help with services provided to customers.
• Explored ways to visualize and send weekly report of test results to team members.
• Collaborated with Data team in developing solutions to improve customer experience and to guide business
decision-making.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className='experienceText'>
        <h2>Technologies I have worked with..</h2>
        <div className='tech'>
          <Box className='techBox'>
            <FaReact />
          </Box>
          <Box className='techBox'>
            <DiMongodb />
          </Box>
          <Box className='techBox'>
            <DiNodejsSmall />
          </Box>
          <Box className='techBox'>
            <DiJsBadge />
          </Box>
          <Box className='techBox'>
            <FaPython />
          </Box>
          <Box className='techBox'>
            <SiCplusplus />
          </Box>
          <Box className='techBox'>
            <DiBootstrap />
          </Box>
          <Box className='techBox'>
            <DiGithubBadge />
          </Box>
          <Box className='techBox'>
            <SiTensorflow />
          </Box>

        </div>
      </div>
    </div>
  )
}

export default Experience