import './App.css';
import { About, Footer, Header, Projects, Technologies } from './containers'
import { NavBar } from './components'
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    var upButton = document.querySelector(".upButton");
    var upButtonI = document.querySelector(".upButtonI");
    upButton.addEventListener("mouseenter",()=>{
      upButtonI.classList.add('upButton_hover');
    })
    upButton.addEventListener("mouseleave",()=>{
      upButtonI.classList.remove('upButton_hover');
    })
    function windowRezized(){
      if(window.screen.width<700){
        upButtonI.classList.remove("fa-2xl");
        upButtonI.classList.add("fa-xl");
        upButton.style.height="50px";
        upButton.style.width="50px";
      }
      else{
        upButtonI.classList.add("fa-2xl");
        upButtonI.classList.remove("fa-xl");
        upButton.style.height="60px";
        upButton.style.width="60px";
      }
      console.log(window.screen.width);
    }
    window.onresize=windowRezized;
    
  })
  return (
      <div className='App'>
        <div className='box'>
          <NavBar/>
          <Header/>
          <Projects/>
          <Technologies/>
          <About/>
          <Footer/>
        </div>
        
        <button className='upButton'><i className="upButtonI fa-solid fa-arrow-up fa-2xl"></i></button>
      </div>
  );
}

export default App;
