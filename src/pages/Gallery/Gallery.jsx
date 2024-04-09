import React from 'react'
import GalleryBg from '../../images/carpenter-studio-using-electric-saw.jpg'
import '../Gallery/gallery.css'
import logo from "../../images/le-brun-high-resolution-logo-black.png"
import statue1 from "../../images/statue1.jpg"
import statue2 from "../../images/statue2.jpg"
import floor1 from "../../images/Floor1.jpg"
import floor2 from "../../images/floor2.jpg"
import door from "../../images/door5.jpg"
import nameplate from "../../images/name plate.jpg"


export default function Gallery() {
  return (
    <div>
        <div className='topBg'>
        <p>FURNITURE IS LIKE A <span>FINE WINE,</span> IT ONLY GETS BETTER WITH<span> AGE</span></p>
        </div>
        <div className='banner'>
            <img class="imgLogo" src={logo} alt="" srcset="" />
            <p>PHOTOS FROM FEW OF OUR WORKS</p>
            <h2>HAPPY CUSTOMERS, SUCCESSFUL EVENTS</h2>
        </div>
        <div className="galleryImg">
            <img src={floor1} alt="" srcset="" />
            <img src={statue1} alt="" srcset="" />
            <img src={floor2} alt="" srcset="" />
            <img src={statue2} alt="" srcset="" />
            <img src={nameplate} alt="" srcset="" />
            <img src={door} alt="" srcset="" />
        </div>
    </div>
  )
}
