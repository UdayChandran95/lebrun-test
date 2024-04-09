import React, { useState } from 'react'
import "./navbar.css"
import logo from "../images/le-brun-high-resolution-logo-white.png"


 export default function NavBar() {

  const [navbar , setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  };

  window.addEventListener('scroll', changeBackground)

  return (
    <div className='top'>
             <nav className={navbar ? "navbar fixed-top navbar-expand-lg navbar-light active" : "navbar fixed-top navbar-expand-lg"}>

                <div class="navbar-brand">
                  <img src={logo} width="120" height="100" alt=""></img>
                </div>
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav ms-auto p-3">
                      <a class="nav-link px-5" aria-current="page" href="/home">HOME</a>
                      <a class="nav-link px-5" href="/gallery">GALLERY</a>
                      <a class="nav-link px-5" href="/service">SERVICES</a>
                      <a class="nav-link px-5" href="/contact">CONTACT</a>
                    </div>
                  </div>
                </div>
              </nav>
    </div>
  )

}
