import React from 'react'
import '../Footer/footer.css'
import logo from "../images/le-brun-high-resolution-logo-black.png"
import paintBgImg from "../images/paintbgimg.png"

export default function Footer() {
  return (
    <div>
        <section>
      <div className='tagBg'>
        <div className='paintBg'>
            <div className='imgBg'>
               <img className='paintBgImg' src={paintBgImg} alt="" />
            </div>
            <div className='textBg'>
                   <p> <span>WE CHOOSE ONLY TOP BRANDS !</span></p>
                   <p>WANT A WOOD POLISH ? SIT RELAX AND JUST GIVE A CALL TO 8056 856 957</p>
            </div>
        </div>
     </div>
            <div class="footer-container">
                 <div class="logo">
                   <img class="imgLogo" src={logo} alt="" srcset="" />
                 </div>
                 <div class="addList">
                    <h2>FIND US</h2>
                    <p>We are down at Muthialpet , Pondy</p>
                 </div>
                 <div class="serviceList">
                    <h2>OUR SERVICES INCLUDE</h2>
                    <ul class="serviceListItem">
                      <li class="serviceListItems">Melamine Polish</li>
                      <li class="serviceListItems">Floor Polish</li>
                      <li class="serviceListItems">PU Polish</li>
                      
                      <li class="serviceListItems">Matt Finishing</li>
                      <li class="serviceListItems">Varnish Polish</li>
                      <li class="serviceListItems">Dico Paints</li>
                      <li class="serviceListItems">False Ceiling Wood Design</li>
                    </ul>
                 </div>
                 <div class="followList">
                   <div class="followListheading">
                      <h2>FOLLOW US:</h2>
                    </div>
                        <div class="sIcon">
                              <i class="fa-brands fa-square-facebook"></i>
                              <i class="fa-brands fa-square-instagram"></i>
                              <i class="fa-brands fa-square-twitter"></i>
                         </div>
                 
                </div>
            </div>
         </section>
         <footer>
                <p>Copyright © 2023 Le Brun.</p>
         </footer>
    </div>
  )
}
