import React, { useState } from 'react';
import pic from './images/calla-lilly.jpg'
import Display from './Components/display';
import Count from './Components/count'

import './App.css';


document.body.style = 'background: rgb(44, 22, 65)';

function App() {  

  const [skills , setSkills] = useState('')

  const handleName =()=>{
    setSkills("My name is Taylor")
  }
  const handleSkills =()=>{
    setSkills("I'm a Frontend Developer")
  }

  const [count, setCount] = useState(0)

  return (
    <div>
        <main>

        <div className='card-container'>
              <div className='image-container'>
                <img src={pic} alt="profile"/>
              </div>
            
           <div className='card-content'>
                
              <Display tech ={skills}></Display>
            
                <div className = "btns">
                  <button onClick ={handleName}>Name</button>
                  <button onClick={handleSkills}>Skills</button>
                </div>
                <br></br>

                <div className="likes">
                <Count likes ={count}/>
                <i class="fas fa-heart" onClick={() => setCount(count + 1)}></i>
                </div>
                <br></br>
                <a href="https://www.instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
                </a>

            </div>
        </div>

        </main>

  </div>
  
      );
          }

export default App;


