import React from 'react'
import './technologies.css'
import {Technology} from '../../components'

const Data = [
  {
    tech:"Html",
    state:"Advanced",
    percentage:90
  },
  {
    tech:"CSS, Sass & Bootstrap",
    state:"Advanced",
    percentage:90
  },
  {
    tech:"Javascript, Typescript, JQuery",
    state:"Advanced",
    percentage:90
  },
  {
    tech:"UI Design in Figma",
    state:"Regular",
    percentage:60
  },
  {
    tech:"Angular",
    state:"Beginner",
    percentage:30
  },
  {
    tech:"React",
    state:"Beginner",
    percentage:30
  },
  {
    tech:"React Native",
    state:"Beginner",
    percentage:30
  },
]
function Technologies() {
  return (
    <div className='technologies'>
      <div className="title">
        <h1>Technologies</h1>
      </div>
      <div className="technologies_container">
        {Data.map(e=>{
          return <Technology key={e.tech} tech={e.tech} state={e.state} percentage={e.percentage}/>
        })}
      </div>
      <div className="title">
          <h1>Aditional Technologies</h1>
        </div>
      <div className="aditional_technologies">
        <ul>
          <li><div className="bullet"></div> Git</li>
          <li><div className="bullet"></div>WordPress</li>
          <li><div className="bullet"></div>Teamwork</li>
          <li><div className="bullet"></div>Quick Learning</li>
          <li><div className="bullet"></div>Engagement</li>
          <li><div className="bullet"></div>B2 English</li>
          <li><div className="bullet"></div>RWD</li>
        </ul>
      </div>
    </div>
  )
}

export default Technologies
