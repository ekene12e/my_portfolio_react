import React from 'react'
import Icons from './Icons'

const Contact = () => {
  return (
    <div>

<main>
        <section class="contact">

           <h2>Contact Me..</h2>
            <div class="contact__list">
              <div class="contact__email">
                  <i class="fas fa-envelope">Email</i>
                  <div class="text-secondary">ekenestanekeson@gmail.com</div>
              </div>
              <div class="contact__phone">
                <i class="fas fa-phone-alt">Phone</i>
                <div class="text-secondary">+2347066071409</div>
            </div>
            <div class="contact__address">
              <i class="fas fa-marker-alt">Address</i>
              <div class="text-secondary">Abeokuta, Nigeria</div>
          </div>
            </div>
            
           {<Icons/>}
        </section>
    </main>

    </div>
  )
}

export default Contact