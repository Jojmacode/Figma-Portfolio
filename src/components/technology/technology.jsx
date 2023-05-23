import React, {useEffect} from 'react'
import './technology.css'
function Technology({tech, state, percentage}) {
  useEffect(()=>{
    var id = "#"+tech;
    var bar = document.getElementById(tech);
    bar.style.width=percentage+"%"
  })
  return (
    <div className='technology'>
      <div className="text">
        <h2>{tech}</h2>
        <h3>{state}</h3>
      </div>
      <div className="bar" id={tech}></div>
    </div>
  )
}

export default Technology
