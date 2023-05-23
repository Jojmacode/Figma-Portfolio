import React from 'react'
import './project.css'
function Project({title, description, colorfulButton, blackButton, preview}) {
  return (
    <div className='project'>
      <div className="img_txt">
        <div className="image_container">
          <img src={preview} alt="Preview" />
        </div>
        <div className="text_container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="buttons_container">
        <button className="colorful">Live Preview</button>
        <button className='black'>Check on GitHub</button>
      </div>
    </div>
  )
}

export default Project
