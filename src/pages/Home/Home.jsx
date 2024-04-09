import React from 'react'
import Bg from '../../images/old-fence-bg.jpg'
import Bg2 from '../../images/old-fence-bg2.jpg'
import './home.css'
import spray from '../../images/worker-spraying.jpg'
import worker from '../../images/male-wood-worker.jpg'
import sanding from '../../images/wood-sanding.jpg'

export default function Home() {
  return (
    <div>
        <section>
                <img className="bgImg" src={Bg} alt=""></img>
                <img className="bgImg2" src={Bg2} alt="" />
                      <div class="heroSection">
                              <h2>BROWN <span>and</span> SHINE</h2>
                              <p>- STYLE YOUR FURNITURE -</p>
                              <button class="bookBtn">BOOK A SERVICE <i class="rightArrow fa-solid fa-arrow-right-long"></i></button>
                      </div>
                        <div className="scrollElement">
                            <p>scroll</p>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                </section>
          <section id="about-container">
              <div class="imghome1">
                <img src={spray} alt=""></img>
              </div>
              <div class="storyDesc">
                    <h2>THE STORY</h2>
                    <h1>SINCE ' 2012</h1>
                    <div class="orgLine"></div>
                    <p>We are team Le Brun, We Started this wood polishing business with two members with some experience.
                    And now we are 10, running a company at Pondicherry.
                    Our team is active all the time and will always
                       back you up in times of need. Le Brun has been satisfying our clients for 
                       over 12 years. Le Brun has always been friendly with the clients.
                       Clients’ satisfaction is the key to our success.</p>
                       <p>We use modern and latest techniques and types of machinery to do our work with
                         perfection. Le Brun has a very strong team of trained professionals who 
                         understand the clients’ thoughts and imagination. 
                        We are all young minds who will give full efforts to prove our worth and efficiency.</p>
              </div>
         </section>
         <section id="how-container">
              <div class="storyDesc">
                 <h2>THE PLAN</h2>
                 <h1>OWN YOUR SHINE</h1>
                 <div class="orgLine"></div>
                 <p>We adjust our working as per clients’ convenience. Firstly, our clients 
                  can search for us online and tell us about their requirements. We are always here
                   to support our clients through thick and thin. Clients will 
                  let us know online for service requirements, we will get in touch
                   with the client.</p>
                   <p>Our team will come up with the best price quotation in which the client 
                    can take time and agree. After fixing dates and times, we visit the site 
                    and we work with efficiency. Contacting us is hassle-free, we have simplified everything for you.</p>
                    <h4 class="serviceDesc">VIEW ALL SERVICES<i class="rightArrow fa-solid fa-arrow-right-long"></i></h4>
              </div>
               <div class="imghome2">
                 <img src={worker} alt=""></img>
               </div>
         </section>
         <section className="mid-container">
             <div className="contactContainer">
                 <h4>LE BRUN</h4>
                 <h2>FOR ENQUIRIES ? WRITE US</h2>
                 <div class="orgLine2"></div>
                 <p>Le Brun is professionally perfect for making your furniture look fabulous.
                  we are the one-stop solution for all polishing services. 
                  Our services have made many clients happy over many years.</p>
                 <p className="contactNo">udayachandran13@gmail.com</p>
             </div>
             
         </section>
       </div>
  )
}
