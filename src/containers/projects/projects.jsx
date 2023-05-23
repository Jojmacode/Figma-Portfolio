import React from 'react'
import './projects.css'
import {Project} from '../../components'
import Preview1 from '../../assets/images/project1.svg'
import Preview2 from '../../assets/images/project2.svg'
import Preview3 from '../../assets/images/project3.svg'
import Preview4 from '../../assets/images/project4.svg'

const Data=[
  {
    title:"Forniture store landing page",
    description:"Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)",
    preview:Preview1
  },
  {
    title:"Designer forniture landing page",
    description:"Responsive HTML/CSS layout for online store of designer furniture. HTML5, CSS3 (SCSS)",
    preview:Preview2
  },
  {
    title:"Landing page frontend developer",
    description:"Responsive HTML/CSS layout for landing page for front-end developer. HTML5, CSS3 (SCSS)",
    preview:Preview3
  },
  {
    title:"Web design redesign for the Venus Project",
    description:"Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)",
    preview:Preview4
  }
]

function Projects() {
  function rendering(){
    
  }
  return (
    <div className='projects'>
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="projects_container">
        {Data.map(e => { 
          return <Project key={e.title} title={e.title} description={e.description} preview={e.preview}/>
        })}
      </div>
    </div>
  )
}

export default Projects
