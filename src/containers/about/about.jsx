import React, {useEffect} from 'react'
import './about.css'
function About() {
  useEffect(()=>{
    const years = document.querySelectorAll(".years h3");
    const bullets = document.querySelectorAll(".about_bullets .bullet_box");
    var lastB=years[years.length-1].offsetWidth;
    for (let index = 0; index < years.length; index++) {
      var width = years[index].offsetWidth;
      bullets[index].style.width=width+"px"; 
    }
    const line = document.querySelector(".timeline_line .empty");
    var emptyLine = lastB+"px";
    line.style.width=emptyLine;

    const timelineTexts = document.querySelectorAll(".timeline_text p");
    var lastT= timelineTexts[timelineTexts.length-1].offsetWidth;
    document.querySelector(".timeline_empty").style.width=(lastT-15)+"px";
  })
  return (
    <div className='about'>
      <div className="title">
        <h1>About me</h1>
      </div>
      <div className="timeline">
        <div className="timeline_container">
          <div className="years">
            <h3>2011</h3>
            <h3>2016</h3>
            <h3>2021</h3>
            <h3>2022</h3>
          </div>
          <div className="timeline_line">
            <div className="line"></div>
            <div className="empty"></div>
          </div>
          <div className="about_bullets">
            <div className="bullet_box">
              <div className="bullet"></div>
            </div>
            <div className="bullet_box">
              <div className="bullet"></div>
            </div>
            <div className="bullet_box">
              <div className="bullet"></div>
            </div>
            <div className="bullet_box">
              <div className="bullet"></div>
            </div>
          </div>
        </div>
        <div className="timeline_empty"></div>
      </div>
      <div className="timeline_text">
          <p>Graduated KTC (Krasnodar Technical College) and for about two years worked with high voltage (35, 110kV) substations as the specialty electrician of emergency mobile crew.
Later qualified as a Crossfit trainer.</p>
          <p>Underwent a digital marketing course and started to work as a PPC and project manager in a local web studio. After 3 months started my own freelance practice.</p>
          <p>Became more interested in IT and decided to try programming. Underwent Java course and made a project.</p>
          <p>Worked out in which field I want to build a developer's career and started to learn Frontend Development.</p>
        </div>
    </div>
  )
}

export default About
