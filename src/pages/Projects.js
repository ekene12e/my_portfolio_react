import React from 'react'
import Icons from './Icons'

const Projects = () => {
  return (
    <div><main>
    <section class="projects">

       <div class="projects__bio-image">
        <h1 class="text-secondary">My projects</h1>
        </div>
      <div class="projects__items">
        <div class="projects__item">
          <img src="./img/img3.jpg" alt="My project 1"/>
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye">Preview</i>                  
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github">Github</i>                  
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="./img/img1.jpg" alt="My project 1"/>
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye">Preview</i>                  
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github">Github</i>                  
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="./img/img3.jpg" alt="My project 1"/>
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye">Preview</i>                  
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github">Github</i>                  
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="./img/img2.jpg" alt="My project 1"/>
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye">Preview</i>                  
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github">Github</i>                  
            </a>
          </div>
        </div>
      </div>
        
        
        {<Icons/>}
    </section>
</main></div>
  )
}

export default Projects