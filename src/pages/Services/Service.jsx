import React from 'react'
import '../Services/service.css'
import logo from "../../images/le-brun-high-resolution-logo-black.png"
import img1 from "../../images/oil-polish.jpg"
import img2 from "../../images/timber-polish-2.jpg"
import img3 from "../../images/maxresdefault.jpg"
import img4 from "../../images/wax-finish.jpg"
import img5 from "../../images/melamine-polish.jpg"
import img6 from "../../images/varnish-polish.jpeg"

export default function Service() {
  return (
    <div>
    <div className='topBg2'>
        <p>WHEN YOU <span>NEED</span> TO FIGHT THE GRIME, OUR <span>POLISH</span> IS DIVINE</p>
        </div>
        <div className="banner2">
            <img class="imgLogo3" src={logo} alt="" srcset="" />
            <p>WHAT WE OFFER</p>
            <div className="offerHeading">
                <h2>OUR MAIN SERVICES INCLUDE</h2>
            </div>
        </div>
        <div className="card-container">
            <div className="card">
                 <img className="img1" src={img1} alt="" srcset="" />
                 <div className="intro">
                     <h1>Oil Based Wood Polish</h1>
                     <p>It is an oil-based substance that penetrates inside the surface and composition 
                     of the wood. 
                     The penetrating wood polishes including linseed oil or tung oil among others.</p>
                 </div>
            </div>
            <div className="card">
                 <img className="img1" src={img2} alt="" srcset="" />
                 <div className="intro">
                     <h1>Floor Polish</h1>
                     <p>Floor polishes are a maintenance coating that provide a shine or sheen to the floor. 
                     It will fill in micro-scratches and make them less noticeable.</p>
                 </div>
            </div>
            <div className="card">
                 <img className="img1" src={img3} alt="" srcset="" />
                 <div className="intro">
                     <h1>PU Polish</h1>
                     <p>PU Polish, short for polyurethane polish, is a protective wood coating 
                     that offers durability, enhances aesthetics, 
                     and provides resistance against scratches.</p>
                 </div>
            </div>
        </div>
        <div className="card-container">
            <div className="card">
                 <img className="img1" src={img4} alt="" srcset="" />
                 <div className="intro">
                     <h1>Wax Polish</h1>
                     <p>Wax furniture polish is a versatile and highly effective choice for 
                     interior wood polish. Wooden surfaces are susceptible to various forms of damage.</p>
                 </div>
            </div>
            <div className="card">
                 <img className="img1" src={img5} alt="" srcset="" />
                 <div className="intro">
                     <h1>Melamine Polish</h1>
                     <p>Melamine polish is a closed pore polish, which means 
                     it seals the pores of the wood, 
                     making it non-breathable and protecting it from hot and cold surfaces</p>
                 </div>
            </div>
            <div className="card">
                 <img className="img1" src={img6} alt="" srcset="" />
                 <div className="intro">
                     <h1>Varnish wood Polish</h1>
                     <p>Varnish is a hard film that permanently covers whatever it's applied to.
                      It's relatively permanent, 
                     in that it can last years under normal wear.</p>
                 </div>
            </div>
        </div>
    </div>
  )
}
