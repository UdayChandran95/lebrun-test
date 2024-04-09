import React from 'react'
import '../Contact/contact.css'
import logo2 from "../../images/le-brun-favicon-black.png"
import woodfloor from "../../images/wood floor.jpg"


export default function Contact() {
  return (
    <div>
        <div className='contactName'>
             <h4>GET IN TOUCH WITH</h4>
             <h2>LE BRUN</h2>
             <p>Email us or find us on social media (or better yet, stop by and say hello!)</p>
        </div>
           
        <div className='contactFormBox'>
              <div className="formImg">
              <div class="storyDesc3">
                    <h1>OWN YOU SHINE</h1>
                    <div class="orgLine3"></div>
                  </div>
                  <p>Wood is certainly a rich and durable option, especially for furniture. 
                  But like everything else, wood is subject to natural wear and tear due to everyday
                   use and the action of moisture and heat.  To maintain its smooth and glossy look,
                   it requires periodic maintenance in the form of, you guessed it, wood polish.</p>
                   <p className='para-2'>Polishing is a great way to bring out wood’s natural qualities, 
                   restore its shine and even highlight its grains.
                   Wood Polishing even brings the wood's surface a dark, glossy, luxurious, and 
                   polished look. Wood Polishing and finishing will also clean and disinfect the 
                   wooden surface by closing the gaps that bacteria can reside in. As wood polishing 
                   impact the wood property, so it will use functionality & feature enhancement.</p>
              </div>
              <div className="contactForm">
                 <div class="storyDesc">
                    <h2>LE BRUN</h2>
                    <h1>CONTACT FORM</h1>
                    <div class="orgLine"></div>
                  </div>
                  <form action="#">
                      <div className="input-box">
                          <div className="input-field field">
                             <input type="text" placeholder='First Name' id='name'
                             autoComplete='off' className='item' />
                          </div> 
                          <div className="input-field field">
                             <input type="text" placeholder='Last Name' id='email'
                             autoComplete='off' className='item' />
                          </div> 
                      </div>
                      <div className="input-box">
                          <div className="input-field field">
                             <input type="text" placeholder='Phone Number' id='phone'
                             autoComplete='off' className='item' />
                          </div> 
                          <div className="input-field field">
                             <input type="text" placeholder='Email' id='email'
                             autoComplete='off' className='item' />
                          </div> 
                      </div>
                      <div className="textarea-field field">
                        <textarea name="" id="message" cols="30" rows="10" 
                        placeholder='Your Message' autoComplete='off' className='item'></textarea>
                      </div>
                      <button type="submit">SEND</button>
                  </form>
              </div>
        </div>
        <div className='banner'>
            <img class="imgLogo2" src={logo2} alt="" srcset="" />
            <p>INVEST IN YOUR SHINE</p>
            <h2>A PERFECT POLISH ALWAYS AWAITS FOR YOU</h2>
        </div>
        <img className="woodFloorImg" src={woodfloor} alt="" srcset="" />
    </div>
  )
}
