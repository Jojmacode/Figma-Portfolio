import React, {useState, useEffect} from 'react'
import './header.css'
import Photo from '../../assets/images/Photo.svg'
import DegElipse from '../../assets/images/Ellipse 15.svg'
import Elipse from '../../assets/images/Ellipse 14.svg'
function Header() {
  
  useEffect(()=>{
    var photo = document.querySelector(".photo");
    var gradient_elipse = document.querySelector(".gradient_elipse");
    var elipse = document.querySelector(".elipse");

    photo.addEventListener("mouseenter", ()=>{
      image_change("hover");
    })
    photo.addEventListener("mouseleave", ()=>{
      image_change("no-hover");
    })
    gradient_elipse.addEventListener("mouseenter", ()=>{
      image_change("hover");
    })
    gradient_elipse.addEventListener("mouseleave", ()=>{
      image_change("no-hover");
    })
    elipse.addEventListener("mouseenter", ()=>{
      image_change("hover");
    })
    elipse.addEventListener("mouseleave", ()=>{
      image_change("no-hover");
    })

    const image_change=(state)=>{
      if(state==="hover"){
        photo.classList.add("photo_hover");
        elipse.classList.add("elipse_hover");
        gradient_elipse.classList.add("gradient_elipse_hover");
      }
      else{
        photo.classList.remove("photo_hover");
        elipse.classList.remove("elipse_hover");
        gradient_elipse.classList.remove("gradient_elipse_hover");
      }
    }
  })
  
  
  return (
    <div className='header'>
      <div className="header_container_info">
        <h1 className="gradient_text">Hello, I'm laroslav,</h1>
        <h1>frontend developer</h1>
        <p>Former digital-marketing specialist, seeking to apply competent development skills with focus on collaboration, communication, and passion</p>
        <button className='action_button'>Download CV</button>
      </div>
      <div className="header_container_images">
        <div className="photo"></div>
        <img className="gradient_elipse" src={DegElipse} alt="" />
        <img className="elipse" src={Elipse} alt="" />
      </div>
    </div>
  )
}

export default Header
