import React, {useEffect} from 'react'
import './footer.css'
function Footer() {
  useEffect(()=>{
    //Border on bottom of menu links
    const links = document.querySelectorAll(".par");
    for(var i=0; i<links.length; i++){
      var element = links[i];
      var width = (links[i].offsetWidth+4)+"px";
      element.style.setProperty('--width', width);
    }
    //Color change of the social media links
    const smLinks = document.querySelectorAll(".colorchange");
    smLinks.forEach(element => {
      var color1=[19,173,199];
      var color1c=[19,173,199];
      var color2=[105,120,209];
      var color2c=[105,120,209];
      var color3=[148,93,214];
      var color3c=[148,93,214];
      var up=false;
      var down=false;
      element.addEventListener("mouseleave", async ()=>{
        down=true;
        up=false;
        var color = "";
        while(up===false){
          if(color1[0]>=255 && color1[1]>=255 && color1[2]>=255 && color2[0]>=255 && color2[1]>=255 && color2[2]>=255 && color3[0]>=255 && color3[1]>=255 && color3[2]>=255){
            up=true;
          }
          for(var i=0; i<color1.length; i++){
            if(color1[i]<255)color1[i]++;
          }
          for(var i=0; i<color2.length; i++){
            if(color2[i]<255)color2[i]++;
          }
          for(var i=0; i<color2.length; i++){
            if(color3[i]<255)color3[i]++;
          }
          await delay(1);
          color = "linear-gradient(270deg, rgb("+color1[0]+","+color1[1]+","+color1[2]+") 0%, rgb("+color2[0]+","+color2[1]+","+color2[2]+") 66.67%, rgb("+color3[0]+","+color3[1]+","+color3[2]+") 100%)";
          element.style.setProperty("background-image", color);
        }
      });
      element.addEventListener("mouseover", async ()=>{
        up=true;
        down=false;
        var color = "";
        while(down===false){
          if(color1[0]<=color1c[0] && color1[1]<=color1c[1] && color1[2]<=color1c[2] && color2[0]<=color1c[2] && color2[1]<=color2c[1] && color2[2]<=color2c[2] && color3[0]<=color3c[0] && color3[1]<=color3c[1] && color3[2]<=color3c[2]){
            down=true;
          }
          for(var i=0; i<color1.length; i++){
            if(color1[i]>color1c[i])color1[i]--;
          }
          for(var i=0; i<color2.length; i++){
            if(color2[i]>color2c[i])color2[i]--;
          }
          for(var i=0; i<color2.length; i++){
            if(color3[i]>color3c[i])color3[i]--;
          }
          await delay(1);
          color = "linear-gradient(270deg, rgb("+color1[0]+","+color1[1]+","+color1[2]+") 0%, rgb("+color2[0]+","+color2[1]+","+color2[2]+") 66.67%, rgb("+color3[0]+","+color3[1]+","+color3[2]+") 100%)";
          element.style.setProperty("background-image", color);
        }
      });
    });
    //Delay function that requires time in ms
    const delay = (delayInms) => {
      return new Promise(resolve => setTimeout(resolve, delayInms));
    }
  })
  return (
    <div className='footer'>
      <p className='gradient_text'>Feel free to contact me</p>
      <p className='par'>moislav@gmail.com </p>
      <p className='par'>Telegram @moislav </p>
      <div className="navbar_links col-3">
        <i class="colorchange fa-brands fa-linkedin"></i>
        <i class="colorchange fa-brands fa-facebook"></i>
        <i class="colorchange fa-brands fa-instagram"></i>
      </div>
    </div>
  )
}

export default Footer
