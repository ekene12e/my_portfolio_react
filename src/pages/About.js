import React from 'react'
import Icons from './Icons'

const About = () => {
  return (
    <div>
      <main>
        <section class="about">

           <div class="about__bio-image">
            <div class="about__bio">
            <h2 class="text-secondary">BIO</h2>
            <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Voluptates quisquam eius, 
              animi dolore magnam reiciendis ducimus? Aliquid, a. Nihil quasi et a 
              maiores repellat nam eum quae vero numquam eligendi. </p>
            </div>
            </div>

            
            <div class="jobs">
              <div class="jobs__job">
                <h2 class="text-secondary">
                  2017 - Current
                </h2>
                <h3>Google</h3>
                <h6>FullStack Developer</h6>
                <p>Lorem ipsum dolor sit, amet consectetur
                   adipisicing elit. Soluta libero nemo quisquam 
                   repellat officiis reiciendis assumenda as
                   pernatur alias ex minima! </p>
              </div>

              <div class="jobs__job">
                <h2 class="text-secondary">
                  2015 - 2017
                </h2>
                <h3>Microsoft</h3>
                <h6>Front-End Developer</h6>
                <p>Lorem ipsum dolor sit, amet consectetur
                   adipisicing elit. Soluta libero nemo quisquam 
                   repellat officiis reiciendis assumenda as
                   pernatur alias ex minima! </p>
              </div>

              <div class="jobs__job">
                <h2 class="text-secondary">
                  2014 - 2015
                </h2>
                <h3>ALX Africa</h3>
                <h6>React Intern</h6>
                <p>Lorem ipsum dolor sit, amet consectetur
                   adipisicing elit. Soluta libero nemo quisquam 
                   repellat officiis reiciendis assumenda as
                   pernatur alias ex minima! </p>
              </div>
            </div>

            {<Icons/>}
        </section>
    </main>
    </div>
  )
}

export default About