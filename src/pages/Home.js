import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Icons from './Icons';


const Home = () => {
  const el = useRef(null);

  useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Web Developer', 'Programmer', 'Pharmacist'],
          startDelay: 150,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay :2000,
          smartBackspace: true,
          showCursor: false,
          loop: true,
        })

  },)

  
  return (
    <div id='particle-js'>

<main >
        <section class="home">

            <h1 style={{fontSize: "2rem", margin: "2rem", fontStyle: "oblique", fontFamily: "Affair"}}> Welcome to my page</h1>
            <h2>I am</h2>
            <h1 class="home__name" style={{fontStyle: "italic"}}>  Ekene <span class="home__name--last"> Ezema</span></h1>
            <h2 style={{fontFamily: "Cantoni", color: "white"}}>
            <span  > I am a </span>
            <span style={{color: 'red'}} ref={el}></span>
                
            </h2>

            {<Icons/>}
        </section>
    </main>
   

    </div>
  )
}

export default Home